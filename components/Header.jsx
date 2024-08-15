"use client"; // Ensure this file is used as a client component

import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Left Section - Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          MyApp
        </Link>
      </div>

      {/* Center Section - Navigation Links */}
      <nav className="flex flex-1 justify-center space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>

      {/* Right Section - Authentication Buttons */}
      <div className="flex items-center">
        {session ? (
          <div className="flex items-center space-x-4">
            <span>Welcome, {session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn('google')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center space-x-2"
          >
            <span>Login with Google</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
