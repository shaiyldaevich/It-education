"use client";
import React from "react";
import scss from "./MainBanner.module.scss";
import banner from "../../../../../assets/men 1.png";
import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

const MainBanner = () => {
    const { t } = useLanguageStore();

    return (
        <section className={scss.MainBanner}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.info}>
                        <h1 className={scss.title}>
                            {t(
                                "IT билим берүү платформасы",
                                "IT образовательная платформа"
                            )}
                        </h1>
                        <h1 className={scss.text}>
                            {t(
                                "Биздин билим берүү платформасы сизге IT чөйрөсүнө адаптация үчүн зарыл болгон практикалык билимин берип берет.",
                                "Наша образовательная платформа вам даст необходимые практические знания для адаптации в IT-сфере."
                            )}
                        </h1>
                    </div>
                    <Image
                        className={scss.bannerIMG}
                        src={banner}
                        alt="banner"
                    />
                </div>
            </div>
        </section>
    );
};

export default MainBanner;
