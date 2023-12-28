"use client";
import Block from "@/app/ui/experience/block";
import { Works } from "../lib/definitions";
import { motion } from "framer-motion";

export default function Client({ experienceData }: { experienceData: Works }) {
  return (
    <motion.div
      className="flex flex-col justify-center grow gap-6 md:py-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4, type: "spring" }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col justify-center grow gap-6 md:py-10 md:px-8">
        <div className="flex h-full flex-col gap-8 py-4 px-2 tracking-[0.25em] ">
          {Object.entries(experienceData.works).map(([key, data]) => (
            <Block key={key} props={data}></Block>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
