import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";

export function Auth() {
  const { handleLogin, handleSubmit, updateUser } = useAuth();
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
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                Sign In
              </Button>
              <Button type="button" variant="outline">
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
