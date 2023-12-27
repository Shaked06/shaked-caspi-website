import path from "path";
import { promises as fs } from "fs";
import { Education, Projects, Publications, Works } from "./definitions";
const resumeDirectory = path.join(process.cwd(), "app/lib/resume_data");

export async function getExperienceData(): Promise<Works> {
  const fullPath = path.join(resumeDirectory, "experience.json");
  const file = await fs.readFile(fullPath, "utf8");
  const data = JSON.parse(file);

  return {
    ...data,
    fallback: true,
  };
}
export async function getEducationData(): Promise<Education> {
  const fullPath = path.join(resumeDirectory, "education.json");
  const file = await fs.readFile(fullPath, "utf8");
  const data = JSON.parse(file);

  return {
    ...data,
    fallback: true,
  };
}
export async function getProjectData(): Promise<Projects> {
  const fullPath = path.join(resumeDirectory, "project.json");
  const file = await fs.readFile(fullPath, "utf8");
  const data = JSON.parse(file);

  return {
    ...data,
    fallback: true,
  };
}
export async function getPublicationData(): Promise<Publications> {
  const fullPath = path.join(resumeDirectory, "publications.json");
  const file = await fs.readFile(fullPath, "utf8");
  const data = JSON.parse(file);

  return {
    ...data,
    fallback: true,
  };
}
