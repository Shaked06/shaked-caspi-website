import path from "path";
import { promises as fs } from "fs";
import { Education, Projects, Publications, Works } from "./definitions";
const resumeDirectory = path.join(process.cwd(), "app/lib/resume_data");

export async function getExperienceData(): Promise<Works> {
  // const fullPath = path.join(resumeDirectory, "experience.json");
  const file = await fetch(
    "https://raw.githubusercontent.com/Shaked06/shaked-caspi-website/main/app/lib/resume_data/experience.json"
  );
  const data = await file.json();

  return {
    ...data,
    fallback: true,
  };
}
export async function getEducationData(): Promise<Education> {
  // const fullPath = path.join(resumeDirectory, "education.json");
  const file = await fetch(
    "https://raw.githubusercontent.com/Shaked06/shaked-caspi-website/main/app/lib/resume_data/education.json"
  );
  const data = await file.json();

  return {
    ...data,
    fallback: true,
  };
}
export async function getProjectData(): Promise<Projects> {
  const fullPath = path.join(resumeDirectory, "project.json");
  const file = await fetch(
    "https://raw.githubusercontent.com/Shaked06/shaked-caspi-website/main/app/lib/resume_data/project.json"
  );
  const data = await file.json();

  return {
    ...data,
    fallback: true,
  };
}
export async function getPublicationData(): Promise<Publications> {
  const fullPath = path.join(resumeDirectory, "publications.json");
  const file = await fetch(
    "https://raw.githubusercontent.com/Shaked06/shaked-caspi-website/main/app/lib/resume_data/publications.json"
  );
  const data = await file.json();
  return {
    ...data,
    fallback: true,
  };
}
