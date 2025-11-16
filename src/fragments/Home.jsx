import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Profil from "../assets/images/profil-transparent.png";
import Finger from "../assets/images/finger.gif";
import TypewriterComponent from "typewriter-effect";
import Header from "@/components/Header";

export default function Home() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-[85vh] px-8 sm:mt-0 font-jakarta">
        <div data-aos="fade-up" className="-mt-16">
          <div className="mx-auto py-4">
            <div className="mx-auto text-center w-40">
              <Image
                unoptimized
                priority
                src={Profil}
                alt="Iqbal"
                className="text-center rounded-full stroke-2 bg-purple-200 dark:bg-[#C8C8C8] stroke-slate-50 w-full h-40 object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="flex items-center justify-center gap-2 py-4 font-medium text-gray-500 dark:text-gray-400">
                Hi, I'm Iqbal{" "}
                <span className="w-8">
                  <Image unoptimized src={Finger} alt="finger" />
                </span>
              </h2>
              <p className="font-bold text-3xl bg-clip-text bg-gradient-to-r from-purple-700 to-purple-300 md:text-5xl pb-2 text-transparent">
                Web Developer | n8n Enthusiast
              </p>
              <div className="flex flex-col gap-1">
                <div className="w-full">
                  <hr className="border-2 border-slate-300 dark:border-gray-700 rounded-full" />
                </div>
                <div className="w-5/6 mx-auto">
                  <hr className="border-2 border-slate-300 dark:border-slate-700 rounded-full" />
                </div>
                <div className="w-4/6 mx-auto">
                  <hr className="border-2 border-slate-300 dark:border-slate-700 rounded-full" />
                </div>
              </div>
              <p className="mx-auto w-5/6 font-medium mt-2 text-gray-500 dark:text-gray-300">
                I build beautifully simple applications and smart, efficient automations.
              </p>
              <div className="mt-2">
                <TypewriterComponent
                  options={{
                    cursor: "",
                    strings: [
                      '<span style="color: #35383F; font-weight: 600"><span style="color: #27ddce">console</span>.<span style="color: #15b2a5">log</span><span style="color: #27ddce">(</span><span style="color: #e21d7c">"Trust the process."</span><span style="color: #27ddce">)</span>;</span>',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
