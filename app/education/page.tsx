import Block from "@/app/ui/education/block";
import { getEducationData } from "@/app/lib/resume";
import { Education } from "@/app/lib/definitions";
import Client from "@/app/education/client";
export default async function Page() {
  try {
    const educationData: Education = await getEducationData();
    return <Client educationData={educationData} />;
  } catch (error) {
    console.log(error);
    return <div>ERROR</div>;
  }
}
