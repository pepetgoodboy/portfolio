import { Element } from "react-scroll";
import Navbar from "@/components/Navbar";
import Home from "@/fragments/Home";
import About from "@/fragments/About";
import Project from "@/fragments/Project";
import Certificate from "@/fragments/Certificate";
import Contact from "@/fragments/Contact";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="project">
        <Project />
      </Element>
      <Element name="certificate">
        <Certificate />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}
