"use client";
import React from "react";
import scss from "./Header.module.scss";
import logo from "../../../../assets/логотип.png";
import Image from "next/image";
import Link from "next/link";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Header = () => {
    const { t } = useLanguageStore();

    return (
        <header className={scss.Header}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.navsBlock}>
                        <Link href={"/"}>
                            <Image
                                className={scss.logo}
                                src={logo}
                                alt="logo"
                            />
                        </Link>
                        <div className={scss.navs}>
                            <Link href={"#"} className={scss.nav}>
                                {t("О школе", "Мектеп жөнүндө")}
                            </Link>
                            <Link href={"#"} className={scss.nav}>
                                {t("Наши курсы", "Биздин курстар")}
                            </Link>
                            <Link href={"#"} className={scss.nav}>
                                {t("О нас", "Биз жөнүндө")}
                            </Link>
                        </div>
                    </div>
                    <div className={scss.auth}>
                        <button className={scss.signUp}>
                            {t("Войти", "Кирүү")}
                        </button>
                        <button className={scss.follow}>
                            {t("Подписаться", "Жазылуу")}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
