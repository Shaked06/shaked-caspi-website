import Block from "@/app/ui/projects/block";
import { getProjectData } from "@/app/lib/resume";
import { Projects } from "../lib/definitions";
import Client from "@/app/projects/client";

export default async function Page() {
  try {
    const projectData: Projects = await getProjectData();
    return <Client projectData={projectData} />;
  } catch (error) {
    console.log(error);
    return <div>ERROR</div>;
  }
}
