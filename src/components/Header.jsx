import { MdEmail } from "react-icons/md";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full font-jakarta">
      <div className="w-5/6 mx-auto py-4">
        <nav className="flex items-center justify-between border-b-2 py-4">
          <div className="flex items-center gap-3">
            <MdEmail
              className="w-8 h-8 md:w-9 md:h-9 p-2 rounded-full bg-purple-200"
              color="purple"
            />
            <p className="text-gray-500 font-semibold hidden md:block">
              iqbalm.works@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.instagram.com/iqbalmudzakii_/"
              target="_blank"
            >
              <FaInstagram
                className="w-5 h-5 md:w-6 md:h-6 hover:scale-125 duration-500 transition-all"
                color="#F92A79"
              />
            </Link>
            <p>/</p>
            <Link href="https://github.com/pepetgoodboy" target="_blank">
              <FaGithub className="w-5 h-5 md:w-6 md:h-6 hover:scale-125 duration-500 transition-all" />
            </Link>
            <p>/</p>
            <Link
              href="https://www.linkedin.com/in/muhammad-iqbal-mudzaki-84a02824a/"
              target="_blank"
            >
              <FaLinkedin
                className="w-5 h-5 md:w-6 md:h-6 hover:scale-125 duration-500 transition-all"
                color="#126BC4"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
