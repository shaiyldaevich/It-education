"use client";
import React, { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../../../assets/логотип.png";
import Image from "next/image";
import Link from "next/link";
import { useLanguageStore } from "@/stores/useLanguageStore";
import BurgerButton from "@/UI/burgerButton/BurgerButton";
import BurgerMenu from "@/UI/burgerMenu/BurgerMenu";

const Header = () => {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 630);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const { t } = useLanguageStore();

    return (
        <header className={scss.Header}>
            <div className="container">
                <div className={scss.content}>
                    <Link href={"/HomePage"}>
                        <Image className={scss.logo} src={logo} alt="logo" />
                    </Link>

                    {isMobile ? (
                        <>
                            <BurgerButton />
                            <BurgerMenu />
                        </>
                    ) : (
                        <>
                            <div className={scss.navsBlock}>
                                <div className={scss.navs}>
                                    <Link
                                        href={"/AboutSchool"}
                                        className={scss.nav}
                                    >
                                        {t("Мектеп жөнүндө", "О школе")}
                                    </Link>
                                    <Link
                                        href={"/MoreCourses"}
                                        className={scss.nav}
                                    >
                                        {t("Биздин курстар", "Наши курсы")}
                                    </Link>
                                    <Link
                                        href={"/aboutUs"}
                                        className={scss.nav}
                                    >
                                        {t("Биз жөнүндө", "О нас")}
                                    </Link>
                                </div>
                            </div>
                            <div className={scss.auth}>
                                <Link href={"/"} className={scss.signUp}>
                                    {t("Кирүү", "Войти")}
                                </Link>
                                <Link
                                    href={"/subscribe"}
                                    className={scss.follow}
                                >
                                    {t("Жазылуу", "Подписаться")}
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
