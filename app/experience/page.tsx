import Block from "@/app/ui/experience/block";
import { getExperienceData } from "@/app/lib/resume";
import { Works } from "../lib/definitions";

export default async function Page(props: { experienceData: Works }) {
  try {
    const experienceData: Works = await getExperienceData();
    return (
      <div className="flex flex-col justify-center grow gap-6 px-4 md:py-4 md:px-8">
        <div className="flex flex-col justify-center grow gap-6 px-6 md:py-10 md:px-8">
          <div className="flex h-full flex-col gap-8 px-3 py-4 md:px-2 tracking-[0.25em]">
            {Object.entries(experienceData.works).map(([key, data]) => (
              <Block key={key} props={data}></Block>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>ERROR</div>;
  }
}
