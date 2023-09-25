import Image from "next/image";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ProductImage from "./sections/ProductImage";
import ProductImageTwo from "./sections/ProductImageTwo";
import ProductFeatures from "./sections/ProductFeatures";
import Incubated from "./sections/Incubated";
import SideBar from "./components/SideBar";
import Footer from "./sections/Footer";
import ProductImageThree from "./sections/ProductImageThree";

export default function Home() {
  return (
    <main className="relative text-white h-screen overflow-x-hidden">
      <div className="relative px-5 sm:px-[4rem] mb-9">
        {/* start navbar */}
        <Navbar />
        {/* end navbar */}

        {/* start side menu */}
        <SideBar />
        {/* end side menu */}

        {/* start hero section */}
        <Hero />
        {/* end hero section */}

        {/* start product image section */}
        <ProductImage />
        {/* end product image section */}

        {/* start product features */}
        <ProductFeatures />
        {/* end product features */}

        {/* start product features */}
        <ProductImageTwo />
        {/* end product features */}

        {/* start software */}
        <ProductImageThree />
        {/* end software */}

        {/* start incubated section */}
        <Incubated />
        {/* end incubated section */}
      </div>

      {/* start footer */}
      <Footer />
      {/* end footer */}
    </main>
  );
}

{
  /* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
  fgdgdf
</div>; */
}
