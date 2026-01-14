import { useState } from "react";
import { useNavigate } from "react-router";
import type { User } from "@/types";

export function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({ name: "", password: "" });
  function updateUser(fields: Partial<User>) {
    setUser((prev) => {
      if (!prev) return prev;
      return { ...prev, ...fields };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(user);
    const resp = await fetch("http://localhost:8080/signup", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    console.log(data);
  }

  async function handleLogin() {
    const resp = await fetch("http://localhost:8080/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data = await resp.json();
    console.log(data);
    if (resp.ok) {
      navigate("/", { replace: true });
    }
  }

  return { handleLogin, handleSubmit, useState, updateUser };
}
