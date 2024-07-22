import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import listProject from "../data/ListProject";

export default function Project() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
    });
  }, []);

  return (
    <div className="mx-auto w-5/6 font-jakarta">
      <div className="mx-auto pb-12">
        <h2
          data-aos="fade-up"
          className="text-4xl font-semibold sm:text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-700 to-purple-300 text-transparent mb-8 text-center"
        >
          Project
        </h2>
        <p
          data-aos="fade-up"
          className="mx-auto text-gray-500 mb-16 text-center text-lg w-full"
        >
          Browse through my project and see the diverse range of website I've
          designed and developed. You can click on the icons below to see the
          details of each project.
        </p>
        <div className="mx-auto gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {listProject.map((project) => (
            <div
              key={project.id}
              data-aos="fade-up"
              className="mx-auto rounded-xl bg-transparent border border-1 border-opacity-25 border-purple-300 hover:border-purple-600 shadow-xl hover:scale-110 duration-500 transition-all"
            >
              <div className="bg-transparent">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="object-cover bg-cover rounded-t-xl"
                />
              </div>
              <div className="py-4 bg-opacity-75 px-4 rounded-b-xl z-20">
                <div className="flex items-center md:gap-2 justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-500">
                      {project.name}
                    </h3>
                    <p className="text-sm mb-1 font-medium text-gray-500">
                      {project.types}
                    </p>
                    <p className="text-gray-500 mt-3 text-xs">{project.desc}</p>
                    <div className="flex items-center gap-2 mt-4">
                      {project.icon.map(({ Icon, color }, index) => (
                        <Icon
                          key={index + 1}
                          className="w-7 h-7 hover:scale-125 duration-500 transition-all"
                          style={{ color: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={project.github}>
                      <FaGithub className="w-7 h-7 hover:scale-125 duration-500 transition-all" />
                    </Link>
                    <Link href={project.link}>
                      <FaGlobe className="w-7 h-7 text-[#800080] hover:scale-125 duration-500 transition-all" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
