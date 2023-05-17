import Link from "next/link";

export const menu = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Contact",
    path: "/contact"
  },
  {
    name: "Resume",
    path: "/Resume 2023.pdf"
  }
];

export default function Navbar() {
  console.log("navbar.js loaded");
  return (
    <div className="flex items-center justify-between md:flex-nowrap bg-base-100 md:gap-10 px-5 py-5">
      <div className="">
        <Link className="font-bold text-xl" href="/">
          Hosei Nakajima
        </Link>
      </div>
      <div className="inline-flex">
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
    </div>
  );
}