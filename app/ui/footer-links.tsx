"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import path from "path";

const links = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/shaked-caspi/",
  },
  {
    name: "github",
    href: "https://github.com/Shaked06",
  },
  {
    name: "gmail",
    href: "mailto:caspi5032@gmail.com",
  },
];
const fullPath = "/images/skills";

export default function FooterLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <a key={link.name} href={link.href} target="_blank">
          <Image
            src={path.join(fullPath, link.name.toLowerCase().concat(".svg"))}
            width={24}
            height={24}
            alt={link.name.toLowerCase()}
            style={{
              display: "inline",
              margin: "16px",

              cursor: "pointer",
              opacity: 0.5,
              textAlign: "left",
            }}
          />
        </a>
      ))}
    </>
  );
}
