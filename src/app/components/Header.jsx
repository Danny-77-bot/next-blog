'use client';

import { Button, Navbar, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export default function Header() {
  const path = usePathname(); // Get current path
  const { theme, setTheme } = useTheme(); // Theme handling state

  return (
    <Navbar className="border-b-2">
      {/* Brand Logo */}
      <Link
        href="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Danny&apos;s Blog
        </span>
      </Link>

      {/* Search Bar */}
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      {/* Dynamic Theme Toggle and Sign-In Button */}
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        <Link href="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      {/* Navbar Links with Active State */}
      <Navbar.Collapse>
        <Link href="/">
          <Navbar.Link active={path === '/'} as="div">
            Home
          </Navbar.Link>
        </Link>
        <Link href="/about">
          <Navbar.Link active={path === '/about'} as="div">
            About
          </Navbar.Link>
        </Link>
        <Link href="/projects">
          <Navbar.Link active={path === '/projects'} as="div">
            Projects
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
