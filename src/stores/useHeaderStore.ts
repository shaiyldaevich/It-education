import { create } from "zustand";

interface HeaderStore {
    links: {
        nameKY: string;
        nameRU: string;
        href: string;
    }[];

    isOpenBurgerMenu: boolean;
    setIsOpenBurgerMenu: (isOpenBurgerMenu: boolean) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
    links: [
        {
            nameKY: "Мектеп жөнүндө",
            nameRU: "О школе",
            href: "/AboutSchool",
        },
        {
            nameKY: "Биздин курстар",
            nameRU: "Наши курсы",
            href: "/MoreCourses",
        },
        { nameKY: "Биз жөнүндө", nameRU: "О нас", href: "/aboutUs" },
    ],

    isOpenBurgerMenu: false,
    setIsOpenBurgerMenu: (isOpenBurgerMenu) =>
        set(() => ({ isOpenBurgerMenu: isOpenBurgerMenu })),
}));
