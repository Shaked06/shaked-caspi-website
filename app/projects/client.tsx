"use client";
import Block from "@/app/ui/projects/block";
import { Projects } from "@/app/lib/definitions";
import { motion } from "framer-motion";

export default function Client({ projectData }: { projectData: Projects }) {
  return (
    <motion.div
      className="flex flex-col justify-center grow gap-6 px-4 md:py-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4, type: "spring" }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col justify-center grow gap-6 px-6 md:py-10 md:px-8">
        <div className="flex h-full flex-col gap-8 px-3 py-4 md:px-2 tracking-[0.25em]">
          {Object.entries(projectData.projects).map(([key, data]) => (
            <Block key={key} props={data}></Block>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
