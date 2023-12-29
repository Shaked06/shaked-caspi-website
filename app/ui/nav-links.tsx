"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

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
              "flex h-[48px] gap-2 p-3 text-xl md:text-2xl text-date font-thin md:p-2 md:px-3 md:grow",
              {
                "font-semibold text-black": pathname === link.href,
              }
            )}
          >
            <motion.p whileHover={{ x: 16 }}>{link.name}</motion.p>
          </Link>
        );
      })}
    </>
  );
}
