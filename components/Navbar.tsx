"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="flex flex-row justify-between p-4 bg-slate-400">
      <div className="flex flex-row gap-2 text-white">
        {session && session.user ? (
          <div className="flex flex-col">
            <span className="text-red">{session.user.name}</span>
            <button onClick={() => signOut()} className="bg-yellow-500">
              signOut
            </button>
          </div>
        ) : (
          <button onClick={() => signIn()} className="bg-red-500">
            signIn
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
