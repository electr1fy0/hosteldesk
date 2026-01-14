import Home from "./pages/Home";
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";

type AuthState = "checking" | "authenticated" | "unauthenticated";

const App = () => {
  const [authState, setAuthState] = useState<AuthState>("checking");

  useEffect(() => {
    const checkAuth = async () => {
      const resp = await fetch("http://localhost:8080/protected", {
        credentials: "include",
      });
      if (resp.status == 401) {
        setAuthState("unauthenticated");
        return;
      }
      const body = resp.json();

      console.log(body);
      setAuthState("authenticated");
    };
    checkAuth();
  }, []);

  if (authState == "unauthenticated")
    return (
      <div className="bg-white min-h-svh flex flex-col items-center">
        <LandingPage />
      </div>
    );
  else if (authState == "authenticated")
    return (
      <div className="bg-white min-h-svh flex flex-col items-center">
        <Home
          onLogout={() => {
            setAuthState("unauthenticated");
          }}
        />
      </div>
    );
  else return <div>Loading...</div>;
};

export default App;
