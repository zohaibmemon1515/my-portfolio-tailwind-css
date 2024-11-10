import Hero from "./Component/Hero/page";
import AboutMe from "./Component/AboutMe/page";
import Service from "./Component/Service/page";
import Skills from "./Component/Skill/page";
import Projects from "./Component/Project/page";
import Contact from "./Component/Contact/page";

export default function Home() {
  return (
    <div>
      <section id="Home">
        <Hero />
      </section>
      <section id="AboutMe">
        <AboutMe />
      </section>
      <section id="Service">
        <Service />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Project">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}
