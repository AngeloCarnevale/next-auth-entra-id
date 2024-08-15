import SignInForm from "@/components/sign-inf-form";
import UserAvatar from "@/components/user-avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserAvatar />
      <SignInForm />
    </main>
  );
}
