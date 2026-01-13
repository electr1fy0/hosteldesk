package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/jackc/pgx/v5"
	"golang.org/x/crypto/bcrypt"
)

var secret = []byte("supersecretkey")

type User struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}

type Issue struct {
	ID       string `json:"id"`
	Title    string `json:"title"`
	Room     string `json:"room"`
	Category string `json:"category"`
	Priority string `json:"priority"`
}

func signinHandler(w http.ResponseWriter, r *http.Request) {
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		w.Write([]byte("failed to decode user data"))
		return
	}
	var dbUser User
	conn, err := pgx.Connect(context.Background(), os.Getenv("POSTGRES_CONN_STR"))
	if err != nil {
		http.Error(w, "failed to connect to db", http.StatusInternalServerError)
		return
	}
	err = conn.QueryRow(context.Background(), "select name, password from users where name = $1", user.Name).Scan(&dbUser.Name, &dbUser.Password)
	if err != nil {
		if err == pgx.ErrNoRows {
			http.Error(w, "invalid credentials", http.StatusUnauthorized)
			return
		}
	}

	err = bcrypt.CompareHashAndPassword([]byte(dbUser.Password), []byte(user.Password))
	if err != nil {
		http.Error(w, "invalid pass or user", http.StatusUnauthorized)
		return
	}

	fmt.Println(dbUser)
	claims := jwt.MapClaims{
		"sub":   user.Name,
		"iat":   time.Now().Unix(),
		"scope": []string{"read", "write"},
		"exp":   time.Now().Add(48 * time.Hour).Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenStr, err := token.SignedString(secret)
	if err != nil {
		http.Error(w, "failed to sign token", http.StatusInternalServerError)
		return
	}
	http.SetCookie(w, &http.Cookie{
		Name:     "auth_jwt",
		Value:    tokenStr,
		Expires:  time.Now().Add(48 * time.Hour),
		Path:     "/",
		Secure:   false,
		SameSite: http.SameSiteNoneMode,
	})

	json.NewEncoder(w).Encode(map[string]string{
		"event": "cookie set",
	})
}

var users = make(map[string]User)

func authMiddeware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		cookie, err := r.Cookie("auth_jwt")
		if err != nil {
			http.Error(w, "no cookie", http.StatusUnauthorized)
			return
		}
		jwtStr := cookie.Value

		token, _ := jwt.Parse(jwtStr, func(t *jwt.Token) (any, error) {
			return secret, nil
		})

		if !token.Valid {
			http.Error(w, "invalid token", http.StatusUnauthorized)
			return
		}
		claims, ok := token.Claims.(jwt.MapClaims)
		fmt.Println(claims)
		if !ok {
			http.Error(w, "invalid claims", http.StatusUnauthorized)
			return
		}
		ctx := context.WithValue(r.Context(), "claims", claims)
		next.ServeHTTP(w, r.WithContext(ctx))

	}
}

func protectedHandler(w http.ResponseWriter, r *http.Request) {
	claims := r.Context().Value("claims")
	json.NewEncoder(w).Encode(claims)

}

func CORSMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	}
}

func signupHandler(w http.ResponseWriter, r *http.Request) {
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)

	if err != nil {
		fmt.Println("error parsing")
		http.Error(w, "invalid body", http.StatusBadRequest)
		return
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(user.Password), 10)
	if err != nil {
		http.Error(w, "failed to hash pass", http.StatusInternalServerError)
		return
	}

	conn, err := pgx.Connect(context.Background(), os.Getenv("POSTGRES_CONN_STR"))
	if err != nil {
		log.Println(err)
		return
	}
	_, err = conn.Exec(context.Background(), `insert into users (name, password) values ($1, $2)`, user.Name, hash)

	if err != nil {
		log.Println(err)
		return
	}

	json.NewEncoder(w).Encode(map[string]string{
		"resp": "nice work",
	})
}

func signoutHandler(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, &http.Cookie{Name: "auth_jwt", Value: "", Path: "/", MaxAge: -1, Secure: false, SameSite: http.SameSiteNoneMode})

	json.NewEncoder(w).Encode(map[string]string{
		"removed": "cookie",
	})
}

func createIssueHandler(w http.ResponseWriter, r *http.Request) {
	var issue Issue
	json.NewDecoder(r.Body).Decode(&issue)
	conn, _ := pgx.Connect(context.Background(), os.Getenv("POSTGRES_CONN_STR"))

	conn.Exec(context.Background(), "insert into issues (title, room, category, priority) values ($1, $2, $3, $4)", issue.Title, issue.Room, issue.Category, issue.Priority)

	json.NewEncoder(w).Encode(map[string]string{
		"created": "issue",
	})
}

func listIssuesHandler(w http.ResponseWriter, r *http.Request) {
	var issue Issue
	var issues = make([]Issue, 0)
	conn, _ := pgx.Connect(context.Background(), os.Getenv("POSTGRES_CONN_STR"))

	rows, err := conn.Query(context.Background(), "select id, title, room, category, priority from issues")
	if err != nil {
		json.NewEncoder(w).Encode(map[string]string{
			"failed": "did not get rows",
		})
	}

	fmt.Println("issues are as follows:")
	for rows.Next() {
		rows.Scan(&issue.ID, &issue.Title, &issue.Room, &issue.Category, &issue.Priority)
		issues = append(issues, issue)
	}

	json.NewEncoder(w).Encode(issues)
}
func main() {
	http.HandleFunc("/signup", CORSMiddleware(signupHandler))
	http.HandleFunc("/login", CORSMiddleware(signinHandler))
	http.HandleFunc("/signout", CORSMiddleware(signoutHandler))
	http.HandleFunc("/protected", CORSMiddleware(authMiddeware(protectedHandler)))
	http.HandleFunc("/issues/create", CORSMiddleware(authMiddeware(createIssueHandler)))
	http.HandleFunc("/issues", CORSMiddleware(authMiddeware(listIssuesHandler)))

	log.Fatal(http.ListenAndServe(":8080", nil))
}
