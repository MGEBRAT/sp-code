import Link from "next/link";
import React from "react";
import Category from "../Category/Category";
import Cards from "../Cards/Cards";

const Soft = ({ getPost, getCategory }) => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between ">
          <h2 className="text-stone-950 text-2xl font-bold">
            Топ по для разработчика
          </h2>
          <Link href={"/soft"} className="text-blue-500">
            {" "}
            Показать все
          </Link>
        </div>
        <Category getCategory={getCategory} />
        <Cards gerData={getPost} />
      </div>
    </section>
  );
};

export default Soft;
