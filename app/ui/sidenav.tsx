import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";

export default function SideNav() {
  const fullName = "SHAKED CASPI";
  return (
    <div className="flex flex-col gap-8 px-3 py-4 tracking-[0.25em]">
      <Link className="flex justify-start p-2" href="/">
        <div className="text-6xl font-base text-white200 flex-wrap">
          {fullName}
        </div>
      </Link>
      <div className="flex grow flex-row flex-wrap items-start gap-3 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block "></div> */}
      </div>
    </div>
  );
}
