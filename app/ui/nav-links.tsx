"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  // { name: "Home", href: "/" },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Education",
    href: "/education",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Publications",
    href: "/publications",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-xl md:text-2xl text-date font-thin md:flex-none md:justify-center md:p-2 md:px-3"
              // {
              //   "bg-sky-100 text-blue-600": pathname === link.href,
              // }
            )}
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
