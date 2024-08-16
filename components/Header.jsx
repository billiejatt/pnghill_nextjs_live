'use client';


import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignInClick = () => {
    setIsModalOpen(true);
  };

  const handleGoogleSignIn = () => {
    signIn('google').then(() => {
      setIsModalOpen(false); // Close the modal after successful login
    });
  };

  const handleSignOut = () => {
    signOut();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { type: "spring", duration: 0.3 } }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="inset-x-0 top-0 z-30 mx-auto w-full backdrop-blur-sm bg-white/60 sticky">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link href="/" aria-current="page" className="flex items-center">
              <Image
              width={120}
              height={80}
                // className="h-10 w-auto"
                src={'/logo.png'}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-end">
            <Link className="text-lg text-gehra hover:bg-light border border-transparent hover:border-b-gehra py-4 px-4" href="/png-images">
              PNG Images
            </Link>
            <Link className="text-lg text-gehra hover:bg-light border border-transparent hover:border-b-gehra py-4 px-4" href="/templates">
              Templates
            </Link>
            <Link className="text-lg text-gehra hover:bg-light border border-transparent hover:border-b-gehra py-4 px-4" href="/backgrounds">
              Backgrounds
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3">
            {session ? (
              <div className="relative" ref={dropdownRef}>
                <Image
                  src={session.user.image}
                  alt="Profile Image"
                  className="rounded-full cursor-pointer"
                  width={40} // Adjusted for better quality
                  height={40} // Adjusted for better quality
                  quality={75} // Ensures higher image quality
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                    >
                      <div className="px-4 py-2 max-w-md">
                        <p className="text-sm font-medium">{session.user.name}</p>
                        <p className="text-sm text-gray-500 line-clamp-1">{session.user.email}</p>
                      </div>
                      <div className="border-t border-gray-200"></div>
                      <Link
                        className="block w-full text-left px-4 py-2 text-sm text-neela hover:bg-neela/10"
                        href={'/dashboard'}
                      >
                        Dashboard
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                        onClick={handleSignOut}
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                className="text-lg text-light py-2 px-4 bg-neela rounded flex items-center gap-2"
                onClick={handleSignInClick}
                type="button"
              >
                Signup / Login
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Google Sign-In */}
      {isModalOpen && (
        <div
          className="fixed inset-0 h-screen flex items-center justify-center bg-black bg-opacity-50 z-40"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Sign in</h2>
            <button
              className="text-lg text-light py-2 px-4 bg-neela rounded flex items-center gap-2"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
