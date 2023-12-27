import Block from "@/app/ui/publications/block";
import { getPublicationData } from "@/app/lib/resume";
import { Publications } from "@/app/lib/definitions";
import Client from "@/app/publications/client";

export default async function Page() {
  try {
    const publicationsData: Publications = await getPublicationData();
    return <Client publicationsData={publicationsData} />;
  } catch (error) {
    console.log(error);
    return <div>ERROR</div>;
  }
}
