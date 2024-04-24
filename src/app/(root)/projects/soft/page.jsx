import Cards from "@/components/Cards/Cards";
import Heading from "@/components/UI/Heading/Heading";
import React from "react";

export default function soft() {
  return (
    <>
      <section className="w-full">
        <div className="container mx-auto">
            <Heading className={'mb-5'} text="софт" />
            <Cards getData={''} />
            <button className="mt-5 w-full py-5 border-blu-500 border text-blu-500 font-medium hover:text-white hover:bg-blue-500 transition-colors rounded-lg duration-300">
            Узнать ....
          </button>
        </div>
      </section>
    </>
  );
}
