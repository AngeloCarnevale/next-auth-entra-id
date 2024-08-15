import { auth } from "@/auth";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <Image
        src={session.user.image as StaticImport | string}
        width={200}
        height={200}
        alt="User Avatar"
      />
    </div>
  );
}
