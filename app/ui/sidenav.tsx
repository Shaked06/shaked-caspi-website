import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";

export default function SideNav() {
  const fullName = "SHAKED CASPI";
  return (
    <div className="flex flex-col gap-8 md:px-3 md:py-4 tracking-[0.25em] md:grow">
      <Link className="flex justify-start p-2" href="/experience">
        <div className="text-2xl md:text-6xl font-base text-white200 md:grow flex-wrap md:whitespace-nowrap">
          {fullName}
        </div>
      </Link>
      <div className="flex flex-col flex-wrap md:flex-nowrap items-start gap-3 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block "></div> */}
      </div>
    </div>
  );
}
