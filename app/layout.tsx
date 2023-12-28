import type { Metadata } from "next";
import { noto_jp } from "./ui/fonts";
import "./globals.css";
import clsx from "clsx";
import SideNav from "@/app/ui/sidenav";

export const metadata: Metadata = {
  title: "SHAKED CASPI",
  description: "shaked caspi portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "bg-gradient-to-b from-darkBlue200 to-darkBlue100 h-screen bg-no-repeat bg-darkBlue100",
          `${noto_jp.className} antialiased`
        )}
      >
        <main className="flex flex-col grow p-2 md:p-6">
          <div className="flex flex-col gap-2 md:gap-8 md:flex-row">
            <div className="flex flex-col grow justify-center gap-6 md:py-10 md:px-8">
              <SideNav />
            </div>
            <div className="w-2/3">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
