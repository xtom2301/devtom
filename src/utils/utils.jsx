import {
  SiFirebase,
  SiGit,
  SiGnubash,
  SiIonic,
  SiJavascript,
  SiMysql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

export const frameworks = [
  {
    name: 'React',
    percent: '75%',
    icon: <SiReact />,
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
    name: 'Vercel',
    percent: '90%',
    icon: <SiVercel />,
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
    name: 'MySQL',
    percent: '60%',
    icon: <SiMysql />,
  },
  {
    name: 'Bash',
    percent: '65%',
    icon: <SiGnubash />,
  },
];
