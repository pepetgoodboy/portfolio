import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPhp,
  SiLaravel,
  SiN8N,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function About() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
    });
  }, []);

  return (
    <div className="mx-auto w-5/6 m-6">
      <div className="mx-auto gap-8 px-4 py-8">
        <div className="mt-4 md:mt-0">
          <h2
            data-aos="fade-up"
            className="text-4xl font-semibold sm:text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-700 to-purple-300 text-transparent mb-4 text-center pb-2"
          >
            Get to know me!
          </h2>
          <p
            data-aos="fade-up"
            className="mx-auto mb-6 md:text-lg text-gray-500 dark:text-gray-400 sm:text-center sm:w-5/6 text-justify w-full"
          >
            Hello! My name is Muhammad Iqbal Mudzaki. You can call me Iqbal,
            Pepet or whatever you want. I'm a 6th-semester Information
            Management student and a{" "}
            <span className="text-purple-700 dark:text-purple-500 font-semibold">
              Web & Automation Developer
            </span>{" "}
            based in West Java, Indonesia. I don't just build websites; I build
            complete digital solutions. I specialize in developing applications
            from scratch , using modern technologies like React, Laravel, and
            NextJS. Beyond the code, I'm passionate about efficiency. I use n8n
            to design and automate complex business workflows, helping teams
            save time and focus on what truly matters. I love turning complex
            problems into simple, beautiful, and efficient solutions. Check out
            my work in the Project section
            <br />
            <br />
            I'm actively open to job opportunities where I can contribute,
            learn, and grow. If you have a good opportunity that matches my
            skills in both web development and automation, please don't hesitate
            to contact me or connect with me on{" "}
            <Link
              href="https://www.linkedin.com/in/iqbalmudzaki"
              target="_blank"
              className="text-purple-700 dark:text-purple-500"
            >
              Linkedin.
            </Link>{" "}
          </p>
        </div>
        <div className="py-10">
          <div className="mx-auto container flex flex-col gap-4">
            <div data-aos="fade-up" className="flex flex-col">
              <h3 className="text-center font-semibold text-2xl md:text-3xl text-transparent py-3 bg-clip-text bg-gradient-to-r from-purple-700 to-purple-300">
                My Skills
              </h3>
              <div className="flex justify-center w-full flex-wrap gap-8">
                <FaHtml5 className="w-10 h-10 md:w-12 md:h-12 text-[#E5532D] hover:scale-125 duration-500 transition-all" />
                <FaCss3Alt className="w-10 h-10 md:w-12 md:h-12 text-[#2D53E5] hover:scale-125 duration-500 transition-all" />
                <IoLogoJavascript className="w-10 h-10 md:w-12 md:h-12 text-[#F4E225] hover:scale-125 duration-500 transition-all" />
                <SiPhp className="w-10 h-10 md:w-12 md:h-12 text-[#787CB4] hover:scale-125 duration-500 transition-all" />
                <FaNodeJs className="w-10 h-10 md:w-12 md:h-12 text-[#87D02E] hover:scale-125 duration-500 transition-all" />
                <FaReact className="w-10 h-10 md:w-12 md:h-12 text-[#08CEFF] hover:scale-125 duration-500 transition-all" />
                <RiNextjsFill className="w-10 h-10 md:w-12 md:h-12 hover:scale-125 duration-500 transition-all" />
                <SiLaravel className="w-10 h-10 md:w-12 md:h-12 text-[#FF291A] hover:scale-125 duration-500 transition-all" />
                <SiMongodb className="w-10 h-10 md:w-12 md:h-12 text-[#499C3A] hover:scale-125 duration-500 transition-all" />
                <SiMysql className="w-10 h-10 md:w-12 md:h-12 text-[#5886A4] hover:scale-125 duration-500 transition-all" />
                <RiTailwindCssFill className="w-10 h-10 md:w-12 md:h-12 text-[#3EBFF8] hover:scale-125 duration-500 transition-all" />
                <FaGitAlt className="w-10 h-10 md:w-12 md:h-12 text-[#F05639] hover:scale-125 duration-500 transition-all" />
                <SiN8N className="w-10 h-10 md:w-12 md:h-12 text-[#EB4A72] hover:scale-125 duration-500 transition-all" />
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col">
              <h3 className="text-center font-semibold text-2xl md:text-3xl text-transparent py-3 bg-clip-text bg-gradient-to-r from-purple-700 to-purple-300">
                Tools
              </h3>
              <div className="flex justify-center w-full flex-wrap gap-8">
                <VscVscode className="w-10 h-10 md:w-12 md:h-12 text-[#087ECE] hover:scale-125 duration-500 transition-all" />
                <IoLogoVercel className="w-10 h-10 md:w-12 md:h-12 hover:scale-125 duration-500 transition-all" />
                <SiPostman className="w-10 h-10 md:w-12 md:h-12 text-[#F26E39] hover:scale-125 duration-500 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
