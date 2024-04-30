import Heading from "@/components/UI/Heading/Heading";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import React from "react";

export default function projects() {
  return (
    <>
      <section className="w-full">
        <div className="container mx-auto">
          <Heading text="по для разрабов" className={"mb-5"} />
          <ProjectCard getData={""} />
          <button className="mt-5 w-full py-5 border-blu-500 border text-blu-500 font-medium hover:text-white hover:bg-blue-500 transition-colors rounded-lg duration-300">
            Узнать ....
          </button>
        </div>
      </section>
    </>
  );
}
