import Link from "next/link";
import { useState } from 'react';
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { Fragment } from "react";


export const menu = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Resume",
    path: "/resume"
  },
  {
    name: "Publications",
    path: "/publications"
  },
  {
    name: "Projects",
    path: "/projects"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];

export default function Navbar(props) {

  console.log("navbar.js loaded");

  const [open, setOpen] = useState(true)
  return (
    <div className="flex items-center justify-between md:flex-nowrap bg-base-100 md:gap-10 py-5">
      <div className="">
        <Link className="font-bold text-xl px-5" href="/">
          Hosei Nakajima
        </Link>
        
        {/* language button */}
      </div>


      <Disclosure>
        {({ open }) => (
          <>
          {/* hamburger button */}
          <Disclosure.Button
            className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden ">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              {open && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!open && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </Disclosure.Button>

          {/* navbar menu */}
          <div className="hidden md:ml-6 md:inline-flex">
            {menu.map((link, index) => {
              return (
                <ul className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400">
                    <li key={index} className="px-5">
                      <Link href={link.path} className="">
                        {link.name}
                      </Link>
                    </li>
                </ul>
              );
            })}
          </div>

          {/* mobile navbar menu */}
          <Disclosure.Panel className="md:hidden absolute mt-24 min-w-full">
          <div className="h-10 md:hidden">
            {menu.map((link, index) => {
              return (
                <ul className="text-sm text-gray-600 hover:text-blue-500 dark:text-gray-400 w-full bg-white py-4 md:hidden">
                    <li key={index} className="px-5">
                      <Disclosure.Button as={Link} href={link.path}>
                        {link.name}
                      </Disclosure.Button>
                    </li>
                </ul>
              );
            })}
          </div>
          </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

