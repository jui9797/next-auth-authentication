import Link from "next/link";
import React from "react";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-300 flex justify-between items-center">
        <h4 className="text-xl font-bold">JANNAT</h4>
        <ul className="flex justify-center items-center gap-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about">Contact</Link>
        </ul>
        <LoginButton></LoginButton>
      </nav>
    </>
  );
};

export default Navbar;
