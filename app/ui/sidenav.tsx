import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";

export default function SideNav() {
  const fullName = "SHAKED CASPI";
  return (
    <div className="flex h-full flex-col px-3 md:py-4 md:px-2 tracking-[0.25em]">
      <Link className="flex h-20 justify-start p-2 md:h-40" href="/">
        <div className="min-w-max text-6xl font-base text-white200">
          {fullName}
        </div>
      </Link>
      <div className="flex grow flex-row items-start gap-3 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block "></div> */}
      </div>
    </div>
  );
}
