import Ayam from "../assets/images/ayamtuwajuh.png";
import Mamae from "../assets/images/mamae.png";
import Curhatin from "../assets/images/curhatin.png";
import Portfolio from "../assets/images/portfolio.png";
import { FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";

const ListProject = [
  {
    id: 1,
    name: "Ayam Tuwajuh",
    image: Ayam,
    types: "Website",
    desc: "A simple e-commerce website made using React, Tailwind CSS, and MongoDB.",
    icon: [
      { Icon: FaReact, color: "#08CEFF" },
      { Icon: RiTailwindCssFill, color: "#3EBFF8" },
    ],
    link: "https://ayam-tuwajuh.vercel.app/",
    github: "https://github.com/pepetgoodboy/ayamtuwajuh-frontend",
  },
  {
    id: 2,
    name: "Mamae Laundry",
    image: Mamae,
    types: "Website",
    desc: "A laundry website made using React, Next.js, Tailwind CSS, and MongoDB.",
    icon: [
      { Icon: FaReact, color: "#08CEFF" },
      { Icon: RiNextjsFill, color: "#000" },
      { Icon: RiTailwindCssFill, color: "#3EBFF8" },
      { Icon: SiMongodb, color: "#499C3A" },
      { Icon: SiExpress, color: "#000" },
    ],
    link: "https://mamae.my.id/",
    github: "https://github.com/pepetgoodboy/mamae-frontend",
  },
  {
    id: 3,
    name: "Curhatin",
    image: Curhatin,
    types: "Website",
    desc: "A chat application made using React, Next.js, Tailwind CSS, and MongoDB.",
    icon: [
      { Icon: FaReact, color: "#08CEFF" },
      { Icon: RiNextjsFill, color: "#000" },
      { Icon: RiTailwindCssFill, color: "#3EBFF8" },
      { Icon: SiMongodb, color: "#499C3A" },
      { Icon: SiExpress, color: "#000" },
    ],
    link: "https://curhatin.fun/",
    github: "https://github.com/pepetgoodboy/curhatin-frontend",
  },
  {
    id: 4,
    name: "Portfolio",
    image: Portfolio,
    types: "Website",
    desc: "A portfolio website made using React, Next.js, and Tailwind CSS.",
    icon: [
      { Icon: FaReact, color: "#08CEFF" },
      { Icon: RiNextjsFill, color: "#000" },
      { Icon: RiTailwindCssFill, color: "#3EBFF8" },
    ],
    link: "/",
    github: "https://github.com/pepetgoodboy/portfolio",
  },
];

export default ListProject;
