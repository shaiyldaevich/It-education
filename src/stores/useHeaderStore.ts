import { create } from "zustand";

interface HeaderStore {
    links: {
        name: string;
        href: string;
    }[];

    isOpenBurgerMenu: boolean;
    setIsOpenBurgerMenu: (isOpenBurgerMenu: boolean) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
    links: [
        { name: "О школе", href: "/#" },
        { name: "Наши курсы", href: ".#" },
        { name: "О нас", href: "/#" },
    ],

    isOpenBurgerMenu: false,
    setIsOpenBurgerMenu: (isOpenBurgerMenu) =>
        set(() => ({ isOpenBurgerMenu: isOpenBurgerMenu })),
}));
