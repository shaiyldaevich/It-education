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
                                {t("Мектеп жөнүндө", "О школе")}
                            </Link>
                            <Link href={"#"} className={scss.nav}>
                                {t("Биздин курстар", "Наши курсы")}
                            </Link>
                            <Link href={"#"} className={scss.nav}>
                                {t("Биз жөнүндө", "О нас")}
                            </Link>
                        </div>
                    </div>
                    <div className={scss.auth}>
                        <button className={scss.signUp}>
                            {t("Кирүү", "Войти")}
                        </button>
                        <button className={scss.follow}>
                            {t("Жазылуу", "Подписаться")}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
