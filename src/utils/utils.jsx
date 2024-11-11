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
];

export const languages = [
  {
    name: "Javascript",
    percent: "75%",
    icon: <SiJavascript />,
  },
  {
    name: "Typescript",
    percent: "50%",
    icon: <SiTypescript />,
  },
  {
    name: "SQL",
    percent: "60%",
    icon: <SiDatabricks />,
  },
  {
    name: "Bash",
    percent: "65%",
    icon: <SiGnubash />,
  },
];

export const latestProjects = [
  {
    thumbnail: "color-guesser.png",
    name: "Color-Guesser",
    desc: "Simple Color Guesser Game with Score and Highscore",
    technologies: ["React", "Tailwind", "Jotai"],
    link: "",
  },
];
