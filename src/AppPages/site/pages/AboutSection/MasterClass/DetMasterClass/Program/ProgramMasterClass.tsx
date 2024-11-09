"use client";
import React from "react";
import scss from "./ProgramMasterClass.module.scss";
import Image from "next/image";
import Img from "@/assets/MasterClassImg.svg";
import { useLanguageStore } from "@/stores/useLanguageStore";

const program = [
    {
        id: 1,
        title: "Reactivity",
    },
    {
        id: 2,
        title: "",
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
];

const ProgramMasterClass = () => {
    const { t } = useLanguageStore();

    return (
        <div id="programm" className={scss.ProgramMasterClass}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.left}>
                        <h1>
                            {t(
                                "МАСТЕР-КЛАСС ПРОГРАММАСЫ",
                                "ПРОГРАММА МАСТЕР-КЛАССА"
                            )}
                        </h1>
                        <div className={scss.cards}>
                            {program.map((item, index) => (
                                <div className={scss.card} key={index}>
                                    <h2>{item.id}</h2>
                                    <p>{item.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className={scss.buttons}>
                            <button>
                                {t(
                                    "Мастер классты сатып алуу",
                                    "Купить мастер-класс"
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={scss.right}>
                        <Image src={Img} alt="alt" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramMasterClass;
