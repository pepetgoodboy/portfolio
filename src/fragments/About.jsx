import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaGitAlt,
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiMysql, SiPostman } from "react-icons/si";
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
            className="mx-auto mb-6 md:text-lg text-gray-500 sm:text-center sm:w-5/6 text-justify w-full"
          >
            Hello! My name is Muhammad Iqbal Mudzaki, you can call me Iqbal,
            Pepet or whatever you want. I'm a 4th semester student at Politeknik
            Praktisi Bandung, focusing on becoming a{" "}
            <span className="text-purple-700">Front-end Developer</span> located
            in West Java, Indonesia. As a Front-end Developer I used to code
            websites from stratch. I love to create simple yet beautiful
            websites with great user experience. I build the Front-end of
            Websites and Web Applications that leads to the success of the
            overall product. Check out some of my work in the Project section.
            Feel free to Connect or Follow me on my{" "}
            <Link
              href="https://www.linkedin.com/in/muhammad-iqbal-mudzaki-84a02824a/"
              target="_blank"
              className="text-purple-700"
            >
              Linkedin.
            </Link>{" "}
            <br />
            <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
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
                <FaNodeJs className="w-10 h-10 md:w-12 md:h-12 text-[#87D02E] hover:scale-125 duration-500 transition-all" />
                <FaReact className="w-10 h-10 md:w-12 md:h-12 text-[#08CEFF] hover:scale-125 duration-500 transition-all" />
                <RiNextjsFill className="w-10 h-10 md:w-12 md:h-12 hover:scale-125 duration-500 transition-all" />
                <SiMongodb className="w-10 h-10 md:w-12 md:h-12 text-[#499C3A] hover:scale-125 duration-500 transition-all" />
                <SiExpress className="w-10 h-10 md:w-12 md:h-12 hover:scale-125 duration-500 transition-all" />
                <FaPhp className="w-10 h-10 md:w-12 md:h-12 text-[#7B7FB5] hover:scale-125 duration-500 transition-all" />
                <FaLaravel className="w-10 h-10 md:w-12 md:h-12 text-[#FF2817] hover:scale-125 duration-500 transition-all" />
                <SiMysql className="w-10 h-10 md:w-12 md:h-12 text-[#5886A4] hover:scale-125 duration-500 transition-all" />
                <RiTailwindCssFill className="w-10 h-10 md:w-12 md:h-12 text-[#3EBFF8] hover:scale-125 duration-500 transition-all" />
                <FaGitAlt className="w-10 h-10 md:w-12 md:h-12 text-[#F05639] hover:scale-125 duration-500 transition-all" />
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
