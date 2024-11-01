"use client";
import React from "react";
import scss from "./BurgerMenu.module.scss";
import Link from "next/link";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { useRouter, usePathname } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";
import classNames from "classnames";

const BurgerMenu = () => {
    const pathname = usePathname();
    const { isOpenBurgerMenu, setIsOpenBurgerMenu, links } = useHeaderStore();
    const { language, setLanguage, t } = useLanguageStore();
    const nav = useRouter();

    const handleLangClick = (lang: "ru" | "ky") => setLanguage(lang);

    const handleNavigation = (href: string) => {
        if (href === "/#") {
            nav.push(href);
        } else {
            const section = href.replace("/", "");
            document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpenBurgerMenu(false);
    };

    return (
        <div
            className={classNames(scss.BurgerMenu, {
                [scss.active]: isOpenBurgerMenu,
            })}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={scss.content}>
                <nav className={scss.nav}>
                    <ul>
                        {links.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={classNames(scss.link, {
                                        [scss.active]: pathname === item.href,
                                    })}
                                    onClick={() => handleNavigation(item.href)}
                                >
                                    {t(item.nameKY, item.nameRU)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={scss.translate}>
                    {["ru", "ky"].map((lang) => (
                        <a
                            key={lang}
                            href="#"
                            className={language === lang ? scss.active : ""}
                            onClick={() => handleLangClick(lang as "ru" | "ky")}
                        >
                            {lang.toUpperCase()}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
