import { signIn } from "@/auth";
import React from "react";
import SignInButton from "./sign-in-button";

export default function SignInForm() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("microsoft-entra-id", { redirectTo: "/" });
      }}
    >
      <SignInButton />
    </form>
  );
}
