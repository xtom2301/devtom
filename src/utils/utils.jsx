import {
  SiFirebase,
  SiGit,
  SiGnubash,
  SiIonic,
  SiJavascript,
  SiDatabricks,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGithub,
  SiNodedotjs,
} from 'react-icons/si';

export const frameworks = [
  {
    name: 'React',
    percent: '75%',
    icon: <SiReact />,
  },
  {
    name: 'NodeJS/Express',
    percent: '50%',
    icon: <SiNodedotjs />,
  },
  {
    name: 'Ionic',
    percent: '40%',
    icon: <SiIonic />,
  },
  {
    name: 'Tailwind',
    percent: '80%',
    icon: <SiTailwindcss />,
  },
];

export const tools = [
  {
    name: 'Git',
    percent: '80%',
    icon: <SiGit />,
  },
  {
    name: 'Github/Gitlab',
    percent: '60%',
    icon: <SiGithub />,
  },
  {
    name: 'Firebase',
    percent: '70%',
    icon: <SiFirebase />,
  },
  {
    name: 'Prisma',
    percent: '40%',
    icon: <SiPrisma />,
  },
];

export const languages = [
  {
    name: 'Javascript',
    percent: '75%',
    icon: <SiJavascript />,
  },
  {
    name: 'Typescript',
    percent: '50%',
    icon: <SiTypescript />,
  },
  {
    name: 'SQL',
    percent: '60%',
    icon: <SiDatabricks />,
  },
  {
    name: 'Bash',
    percent: '65%',
    icon: <SiGnubash />,
  },
];

export const latestProjects = [
  {
    thumbnail: 'crypto_viewer.png',
    name: 'Crypto-Viewer',
    desc: 'Show Coins, Add Favorites, See Details and 7 Day Chart',
    technologies: ['React', 'Tailwind', 'Zustand'],
    link: 'https://crypto-viewer-rose.vercel.app/',
  },
  {
    thumbnail: 'color-guesser.png',
    name: 'Color-Guesser',
    desc: 'Simple Color Guesser Game with Score and Highscore',
    technologies: ['React', 'Tailwind', 'Jotai'],
    link: 'https://color-guesser.vercel.app/',
  },
  {
    thumbnail: 'jata.png',
    name: 'JATA Todo App',
    desc: 'Just another Todo App',
    technologies: ['React', 'Tailwind', 'Jotai'],
    link: 'https://jata-xi.vercel.app/',
  },
];
