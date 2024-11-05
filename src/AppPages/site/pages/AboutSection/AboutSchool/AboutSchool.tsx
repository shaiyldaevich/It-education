"use client";
import React from "react";
import scss from "./AboutSchool.module.scss";
import banner from "../../../../../assets/AboutSchoolPNG.png";
import Image from "next/image";
import Link from "next/link";
import { useLanguageStore } from "@/stores/useLanguageStore";

const AboutSchool = () => {
    const { t } = useLanguageStore();

    return (
        <section className={scss.AboutSchool}>
            <div className="container">
                <div className={scss.path}>
                    <Link className={scss.homeNav} href={"/"}>
                        {t("Башкы /", "Главная /")}
                    </Link>

                    <Link className={scss.nav} href={"/AboutSchool"}>
                        {t("Мектеп тууралуу", "О школе")}
                    </Link>
                </div>
                <div className={scss.content}>
                    <div className={scss.info}>
                        <div className={scss.about}>
                            <h1 className={scss.title}>
                                {t("Биздин мектеп тууралуу:", "О нашей школе:")}
                            </h1>
                            <h1 className={scss.text}>
                                {t(
                                    "Биздин платформа — бул жогорку талаптагы кесипти үйрөнүүнү, IT тармагына кирүүнү жана көбүрөөк киреше табууну каалагандар үчүн интенсивдүү программа.",
                                    "Наша платформа — это интенсивная программа обучения для тех, кто хочет освоить востребованную профессию, войти в IT и зарабатывать больше."
                                )}
                            </h1>
                        </div>
                        <div className={scss.tasks}>
                            <h1 className={scss.title}>
                                {t("Биздин миссия:", "Наша миссия:")}
                            </h1>
                            <h1 className={scss.text}>
                                {t(
                                    "Заманбап технологияларга кызыгууну жаратуу жана мектеп окуучусуна келечектеги адистикти тандоого жардам берүү.",
                                    " Сформировать интерес к современным технологиям и помочь школьнику определиться с выбором будущей специальности."
                                )}
                            </h1>
                        </div>
                    </div>
                    <div className={scss.banner}>
                        <Image
                            className={scss.bannerIMG}
                            src={banner}
                            alt="banner"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSchool;
