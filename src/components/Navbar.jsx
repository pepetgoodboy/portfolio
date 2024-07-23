import { useRouter } from "next/router";
import { useState } from "react";
import { Link } from "react-scroll";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="font-jakarta relative z-10">
      <div className="fixed -right-4 rotate-[270deg] top-[50%]">
        <div className="w-full">
          <button
            onClick={toggleMenu}
            className="px-3 bg-[#800080] dark:bg-[#D1D5DB] py-0.5 rounded-t-xl"
          >
            <TiArrowSortedUp className="w-8 h-8 text-[#E9D5FF] dark:text-black" />
          </button>
        </div>
      </div>
      {open && (
        <div className="fixed w-full h-full bg-[#E9D5FF] dark:bg-[#D1D5DB]">
          <div className="flex items-center justify-center min-h-screen flex-col gap-12 text-neutral-500">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              className="text-3xl md:text-4xl font-bold hover:text-purple-600 hover:font-extrabold"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              className="text-3xl md:text-4xl font-bold hover:text-purple-600 hover:font-extrabold"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              className="text-3xl md:text-4xl font-bold hover:text-purple-600 hover:font-extrabold"
            >
              Project
            </Link>
            <Link
              activeClass="active"
              to="certificate"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              className="text-3xl md:text-4xl font-bold hover:text-purple-600 hover:font-extrabold"
            >
              Certificate
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              className="text-3xl md:text-4xl font-bold hover:text-purple-600 hover:font-extrabold"
            >
              Contact
            </Link>
            <a
              href="/document/cv.pdf"
              onClick={toggleMenu}
              className="text-3xl md:text-4xl font-bold hover:text-purple-600 hover:font-extrabold"
              download
              rel="noopener noreferrer"
              target="_blank"
            >
              Download CV
            </a>
          </div>
          <div className="absolute -right-0.5 top-[51%] rotate-[270deg]">
            <button onClick={toggleMenu}>
              <TiArrowSortedDown className="w-8 h-8 text-[#737373] hover:text-purple-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
