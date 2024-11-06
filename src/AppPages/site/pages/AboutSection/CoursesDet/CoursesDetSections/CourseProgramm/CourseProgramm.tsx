"use client";

import React from "react";
import scss from "./CourseProgramm.module.scss";
import Image from "next/image";
import Img from "@/assets/MasterClassImg.svg";
import { useLanguageStore } from "@/stores/useLanguageStore";
const programm = [
    {
        id: 1,
        title: "Reactivity",
    },
    {
        id: 2,
        title: "Reactive approach",
    },
    {
        id: 3,
        title: "Observable example",
    },
    {
        id: 4,
        title: "Implementing and subscribing to an observer",
    },
    {
        id: 5,
        title: "Reactive Streams spec",
    },
    {
        id: 6,
        title: "Reactive Streams spec",
    },
];

const CourseProgramm = () => {
    const { t } = useLanguageStore();
    return (
        <section className={scss.ProgramMasterClass}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.left}>
                        <h1 id="coursesProgramm">
                            {t("КУРС ПРОГРАММАСЫ", "ПРОГРАММА КУРСА")}
                        </h1>
                        <div id="coursesProgramm" className={scss.cards}>
                            {programm.map((item, index) => (
                                <div className={scss.card} key={index}>
                                    <h2>{item.id}</h2>
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className={scss.buttons}>
                            <button>
                                {" "}
                                {t("Катталуу", "Зарегистрироваться")}
                            </button>
                        </div>
                    </div>
                    <div className={scss.right}>
                        <Image src={Img} alt="alt" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseProgramm;
