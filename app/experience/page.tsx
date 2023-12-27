import { getExperienceData } from "@/app/lib/resume";
import { Works } from "@/app/lib/definitions";
import Client from "@/app/experience/client";

export default async function Page() {
  try {
    const experienceData: Works = await getExperienceData();
    return <Client experienceData={experienceData} />;
  } catch (error) {
    console.log(error);
    return <div>ERROR</div>;
  }
}
