import { atom } from "recoil";

export  const themeAtom = atom({
    key: 'themeAtom', // unique ID (with respect to other atoms/selectors)
    default: 'dark', // default value (aka initial value)
  });