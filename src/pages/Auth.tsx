import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { useNavigate } from "react-router";

import { Input } from "@/components/ui/input";
import { useState } from "react";

type User = {
  name: string;
  password: string;
};

export function Auth() {
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

  return (
    <div className="flex flex-col justify-start items-center min-h-svh min-w-svh">
      <div className="w-full max-w-md max-h-md mt-32">
        <form onSubmit={(e) => handleSubmit(e)}>
          <FieldGroup>
            <FieldSet className="">
              <FieldLegend>Login Details</FieldLegend>
              <FieldDescription>All details are encrypted</FieldDescription>

              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Username
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="electr1fy0"
                  required
                  onChange={(e) => updateUser({ name: e.target.value })}
                  className="font-mono"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password-input">Password</FieldLabel>
                <Input
                  id="password-input"
                  placeholder="secret-pass-123"
                  type="password"
                  required
                  onChange={(e) => {
                    updateUser({ password: e.target.value });
                  }}
                />
              </Field>
            </FieldSet>
            <Field orientation="vertical">
              <Button
                variant="default"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                Login
              </Button>
              <Button type="submit" variant="outline">
                Signup
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}

export default Auth;
