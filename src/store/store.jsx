import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const darkmodeAtom = atomWithStorage("darkMode", false);

export const useDarkmode = () => {
  const [darkmode, setDarkmode] = useAtom(darkmodeAtom);

  if (darkmode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return { darkmode, setDarkmode };
};
