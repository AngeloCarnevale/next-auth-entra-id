import { auth, signOut } from "@/auth";
import { SignOutForm } from "@/components/sign-out-form";
import UserAvatar from "@/components/user-avatar";
import { useSession } from "next-auth/react";

export default async function Home() {
  const session = await auth();

  console.log("Session: ", session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserAvatar />
      <SignOutForm />
    </main>
  );
}
