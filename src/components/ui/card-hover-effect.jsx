import { cn } from "@/lib/utils";
import {  lora, supreme, inconsolata, lato } from '../../app/styles/fonts'
import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={
        "grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4  py-10"
       }
    >
      {Object.keys(items).map((category, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{category}</CardTitle>
            <CardDescription>{items[category]}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={
        "rounded-2xl h-full shadow-md w-full p-4 overflow-hidden bg-background border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20"
       }
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h3 className={"text-zinc-100 font-bold tracking-wide mt-4"}>
      {children}
    </h3>
  );
};
export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <ul
      className={
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm"
       }
    >

        {children.map((skill) => (
        <li key={skill} className={`list-none text-secondary ${supreme.className}`}>{skill}</li>
        ))}

    </ul>
      
     
  );
};
