import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#800080] dark:bg-[#141414] bg-opacity-90 font-jakarta">
      <div className="mx-auto w-5/6">
        <div className="flex justify-between py-8 flex-col-reverse gap-y-6 sm:flex-row">
          <div className="flex flex-col gap-y-6 md:w-[90%]">
            <h3 className="text-2xl text-neutral-200 font-semibold">
              Muhammad Iqbal Mudzaki
            </h3>
            <p className="text-neutral-200 w-full sm:w-4/6">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-lg text-neutral-200 font-semibold">
              Social Links
            </h3>
            <div className="flex gap-3 flex-wrap justify-start sm:justify-end">
              <Link
                href="https://www.instagram.com/iqbalmudzakii_/"
                target="_blank"
              >
                <FaInstagram className="w-6 h-6 text-neutral-200 hover:scale-125 duration-500 transition-all" />
              </Link>
              <Link href="https://github.com/pepetgoodboy" target="_blank">
                <FaGithub className="w-6 h-6 text-neutral-200 hover:scale-125 duration-500 transition-all" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-iqbal-mudzaki-84a02824a/"
                target="_blank"
              >
                <FaLinkedin className="w-6 h-6 text-neutral-200 hover:scale-125 duration-500 transition-all" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="text-neutral-200" />
        <h3 className="text-center text-neutral-200 py-4 text-sm">
          Made by{" "}
          <span className="font-bold">
            <Link href="https://github.com/pepetgoodboy" target="_blank">
              Muhammad Iqbal Mudzaki
            </Link>
          </span>
        </h3>
      </div>
    </footer>
  );
}
