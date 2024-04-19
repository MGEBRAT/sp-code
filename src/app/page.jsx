import Banner from "@/components/Banner/Banner";
import Image from "next/image";
import DataBanner from "@/collections/TestData";
import Soft from "@/components/Soft/Soft";

export default function Home() {
  return (
    <>
      <Banner getData={DataBanner} />
      <Soft getPost={''} getCategory={''} />
    </>
  );
}
