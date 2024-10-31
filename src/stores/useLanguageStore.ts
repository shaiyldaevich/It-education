import { create } from "zustand";

interface LanguageStore {
    language: "ky" | "ru";
    setLanguage: (language: "ky" | "ru") => void;
    t: (ky: string, ru: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
    language: "ru",
    setLanguage: (language: "ky" | "ru") => set({ language }),
    t: (ky: string, ru: string) => {
        const currentLanguage = get().language;
        if (currentLanguage === "ky") return ky;
        return ru;
    },
}));
