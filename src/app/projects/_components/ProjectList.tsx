"use client";
import { motion } from "framer-motion";
import Project, { ProjectPreviewProps } from "./Project";

type ProjectListProps = {
  projects: ProjectPreviewProps[];
};

function ProjectList({ projects }: ProjectListProps) {
  return (
    <motion.ul
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2,
        type: "spring",
        ease: "easeInOut",
        bounce: 0.3,
        delay: 3,
      }}
      initial={{
        opacity: 0,
        y: 100,
      }}
      className="mt-4 grid rounded-md bg-slate-600 p-2 md:grid-cols-2"
    >
      {projects.map((project) => {
        return (
          <li key={project.title}>
            <Project {...project} />
          </li>
        );
      })}
    </motion.ul>
  );
}
export default ProjectList;
