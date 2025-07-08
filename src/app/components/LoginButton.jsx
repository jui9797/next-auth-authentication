"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="btn border-2 p-4 cursor-pointer"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginButton;
