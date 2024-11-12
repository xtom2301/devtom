import {
  SiFirebase,
  SiGit,
  SiGnubash,
  SiIonic,
  SiJavascript,
  SiDatabricks,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGithub,
  SiNodedotjs,
} from "react-icons/si";
import { CiDatabase } from "react-icons/ci";
import { TbBrandNextjs } from "react-icons/tb";

export const frameworks = [
  {
    name: "React",
    percent: "75%",
    icon: <SiReact />,
  },
  {
    name: "NodeJS/Express",
    percent: "50%",
    icon: <SiNodedotjs />,
  },
  {
    name: "Ionic",
    percent: "40%",
    icon: <SiIonic />,
  },
  {
    name: "Tailwind",
    percent: "80%",
    icon: <SiTailwindcss />,
  },
  {
    name: "NextJS",
    percent: "30%",
    icon: <TbBrandNextjs />,
  },
];

export const tools = [
  {
    name: "Git",
    percent: "80%",
    icon: <SiGit />,
  },
  {
    name: "Github/Gitlab",
    percent: "60%",
    icon: <SiGithub />,
  },
  {
    name: "Firebase",
    percent: "70%",
    icon: <SiFirebase />,
  },
  {
    name: "Convex",
    percent: "30%",
    icon: <SiDatabricks />,
  },
];

export const languages = [
  {
    name: "Javascript",
    percent: "78%",
    icon: <SiJavascript />,
  },
  {
    name: "Typescript",
    percent: "50%",
    icon: <SiTypescript />,
  },
  {
    name: "SQL",
    percent: "40%",
    icon: <CiDatabase />,
  },
  {
    name: "Bash",
    percent: "65%",
    icon: <SiGnubash />,
  },
];
