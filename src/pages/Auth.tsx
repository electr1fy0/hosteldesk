import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type User = {
  id: string;
  name: string;
};

export function Auth() {
  const [user, setUser] = useState<User>({ id: "", name: "" });

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
      method: "GET",
      credentials: "include",
    });
    const data = await resp.json();
    console.log(data);
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={(e) => handleSubmit(e)}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Username</FieldLegend>
            <FieldDescription>All details are encrypted</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  UserID
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Nice Habit"
                  required
                  onChange={(e) => updateUser({ id: e.target.value })}
                />
              </Field>
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
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <Field orientation="horizontal">
            <Button type="submit">Signup</Button>
            <Button
              variant="outline"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              Login
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

export default Auth;
