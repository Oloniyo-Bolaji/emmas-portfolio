import Image from "next/image";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { client } from "@/src/sanity/client";
import { getAbout, getHero } from "@/src/sanity/queries";
import dynamic from "next/dynamic";
import ParticlesBgComponent from "@/components/ParticlesWrapper";


const options = { next: { revalidate: 30 } };

const Home = async () => {
  const hero = await client.fetch(getHero, {}, options);
  const about = await client.fetch(getAbout, {}, options);

  return (
    <div className="relative">
      <ParticlesBgComponent />

      <div className="relative z-10 flex flex-col sm:flex-col lg:flex-row">
        <Navbar hero={hero} />
        <main className="lg:ml-[25%] sm:mt-[60px] mt-[60px]">
          <Hero hero={hero} />
          <About about={about} />
        </main>
      </div>
    </div>
  );
};

export default Home;
