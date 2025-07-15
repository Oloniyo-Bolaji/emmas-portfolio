import Image from "next/image";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { client } from "@/src/sanity/client";
import {
  getAbout,
  getCerts,
  getHero,
  getProjects,
  getSkills,
  getTools,
} from "@/src/sanity/queries";
import ParticlesBgComponent from "@/components/ParticlesWrapper";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

const options = { next: { revalidate: 30 } };

const Home = async () => {
  const hero = await client.fetch(getHero, {}, options);
  const about = await client.fetch(getAbout, {}, options);
  const tools = await client.fetch(getTools, {}, options);
  const skills = await client.fetch(getSkills, {}, options);
  const certs = await client.fetch(getCerts, {}, options);
  const projects = await client.fetch(getProjects, {}, options);

  return (
    <div className="relative">
      <ParticlesBgComponent />

      <div className="relative z-10 flex flex-col sm:flex-col lg:flex-row">
        <main className="lg:ml-[25%] sm:mt-[60px] mt-[60px]">
          <Hero hero={hero} />
          <About about={about} />
          <Skills skills={skills} tools={tools} />
          <Certifications certs={certs} />
          <Projects projects={projects} />
          <Testimonials />
        </main>
      </div>
    </div>
  );
};

export default Home;
