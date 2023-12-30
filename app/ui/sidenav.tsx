import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";
import FooterLinks from "@/app/ui/footer-links";
export default function SideNav() {
  const fullName = "SHAKED CASPI";
  return (
    <div className="flex flex-col md:gap-8 px-3 pt-8 pb-2 md:px-3 md:py-4 tracking-[0.25em] md:grow">
      <Link className="flex justify-start p-2" href="/experience">
        <div className="text-4xl md:text-6xl font-base text-white200 md:grow flex-wrap md:whitespace-nowrap">
          {fullName}
        </div>
      </Link>
      <div className="flex flex-col flex-wrap md:flex-nowrap items-start texe-date font-thin md:gap-3 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block "></div> */}
      </div>
      <div className="flex flex-row justify-start grow">
        <FooterLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block "></div> */}
      </div>
    </div>
  );
}
