import React from "react";
import Link from "next/link";
import ProjectCard from "../ProjectCard/ProjectCard";
import Heading from "../UI/Heading/Heading";

const Projects = ({ getData }) => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
          <Heading text="готоыфе проектф" className={"mb-5"} />
          <Link href={"/soft"} className="text-blue-500">
            Показать все
          </Link>
        </div>
        <ProjectCard getData={""} />
      </div>
    </section>
  );
};

export default Projects;
