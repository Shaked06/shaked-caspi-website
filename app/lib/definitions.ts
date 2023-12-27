// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Work = {
  title: string;
  place: string;
  work_period: string;
  desc: string;
  skills: string[];
};
export type Works = {
  works: Work[];
};

export type Degree = {
  title: string;
  major: string;
  university: string;
  degree_period: string;
};

export type Education = {
  degrees: Degree[];
};

export type Project = {
  title: string;
  project_period: string;
  metadata: string;
  desc: string;
  skills: string[];
};

export type Projects = {
  projects: Project[];
};

export type Publication = {
  time: string;
  title: string;
};

export type Publications = {
  publications: Publication[];
};
