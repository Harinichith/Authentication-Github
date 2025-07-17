"use client";
import Image from "next/image";
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        <p>You are signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
        {session.user.image && (
          <img src={session.user.image} alt="User Image" />
        )}
      </>
    );
  }

  return (
    <div>
      <p>Please! Sign In</p>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
}