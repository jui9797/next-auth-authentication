import Link from "next/link";
import React from "react";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <nav className="bg-blue-300 flex justify-between">
      <ul className="flex justify-center items-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <li>Contact</li>
      </ul>
      <LoginButton></LoginButton>
    </nav>
  );
};

export default Navbar;
