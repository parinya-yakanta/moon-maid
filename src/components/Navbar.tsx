"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Benefits", href: "#benefits-costs" },
    { name: "About Us", href: "#about-us" },
    { name: "FAQ", href: "#faq-section" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <nav className="container relative flex flex-wrap items-center justify-between p-6 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-semibold text-indigo-500 dark:text-gray-100">
            <Image
              src="/img/logo-moon-maid.png"
              width="32"
              height="32"
              alt="Moon Maid"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="ml-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-bold tracking-wide text-xl drop-shadow-sm">
              Moon Maid ✨
            </span>
          </span>
        </Link>

        {/* Right buttons */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="https://wa.me/97778441"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-md md:ml-5 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/"
                  className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                >
                  Get Started
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 dark:text-gray-200 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
