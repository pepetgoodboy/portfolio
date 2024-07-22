import Ayam from "../assets/images/ayamtuwajuh.png";
import Mamae from "../assets/images/mamae.png";
import MyNotes from "../assets/images/mynotes.png";
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
    desc: "A food website made using React and Tailwind CSS.",
    icon: [
      { Icon: FaReact, color: "#08CEFF" },
      { Icon: RiTailwindCssFill, color: "#3EBFF8" },
    ],
    link: "https://ayamtuwajuh.vercel.app/",
    github: "https://github.com/pepetgoodboy/ayamtuwajuh",
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
    name: "My Notes",
    image: MyNotes,
    types: "Website",
    desc: "A notes website made using PHP, Laravel, MySQL, and Tailwind CSS.",
    icon: [
      { Icon: FaPhp, color: "#7B7FB5" },
      { Icon: FaLaravel, color: "#FF2817" },
      { Icon: SiMysql, color: "#5886A4" },
      { Icon: RiTailwindCssFill, color: "#3EBFF8" },
    ],
    link: "https://mynotes-production-43ac.up.railway.app/",
    github: "https://github.com/pepetgoodboy/mynotes",
  },
  {
    id: 4,
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
    id: 5,
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
