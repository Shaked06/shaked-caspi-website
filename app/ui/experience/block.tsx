"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import path from "path";
import { Work } from "@/app/lib/definitions";

export default function Block({ props }: { props: Work }) {
  const fullPath = "/images/skills";

  return (
    <div className="flex flex-col md:flex-row md:grow md:gap-8 text-white100 tracking-wider">
      <div className="text-sm md:text-base text-date font-thin md:min-w-40 text-wrap">
        {props.work_period.toUpperCase()}
      </div>
      <div className="text-sm md:text-base grow font-normal md:font-normal min-w-64">
        <h3 className="pb-2">
          {props.title} @ {props.place}
        </h3>

        <p className="text-xs font-thin text-date">{props.desc}</p>
        <p>
          {props.skills.map((value, index) => (
            <motion.button
              className="bg-date opacity-50 mt-2 mr-1 px-1 rounded text-[10px] font-base text-white100 cursor-default tracking-wider"
              whileHover={{
                backgroundColor: "#243B55",
                scale: 1.01,
                opacity: 1,
                transition: {
                  type: "tween",
                  stiffness: 400,
                  damping: 6,
                },
              }}
            >
              {/* <Image
                src={path.join(fullPath, value.toLowerCase().concat(".svg"))}
                width={24}
                height={24}
                alt={value.toLowerCase()}
              /> */}
              {value}
            </motion.button>
          ))}
        </p>
      </div>
    </div>
  );
}
