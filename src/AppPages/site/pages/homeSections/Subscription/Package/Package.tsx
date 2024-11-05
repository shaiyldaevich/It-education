"use client";

import React from "react";
import scss from "./Package.module.scss";
import DoYouHave from "../../DoYouHaveAQ/DoYouHave";
import Link from "next/link";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Request from "../../Request/Request";

const data = [
    {
        time: "Месяц",
        price: 105,
        payment: "Ежемесячно",
        advantages: ["Все статьи"],
    },
    {
        time: "Год",
        price: 220,
        payment: "Ежегодно",
        advantages: ["Все статьи", "Все мастер классы"],
    },
    {
        time: "Год",
        price: 585,
        payment: "Ежегодно",
        advantages: [
            "Все статьи",
            "Все мастер классы",
            "6 новых статей каждый месяц",
            "Доступ к курсу “DevOps - инженер”",
        ],
    },
];

const Package = () => {
    const { t } = useLanguageStore();

    return (
        <section className={scss.Package}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.path}>
                        <Link className={scss.homeNav} href={"/"}>
                            {t("Башкы бет", "Главная")} /{" "}
                        </Link>
                        <Link className={scss.nav} href={"/Package"}>
                            {t("Катышуу пакети", "Пакет участия")}{" "}
                        </Link>
                    </div>
                    <h1 className={scss.title}>
                        {t(
                            "Өзүңүздүн катышуу пакетин тандаңыз",
                            "Выберите свой пакет участия"
                        )}{" "}
                    </h1>
                    <div className={scss.cardsBlock}>
                        <div className={scss.cards}>
                            {data.map((item, index) => (
                                <div key={index} className={scss.card}>
                                    <div className={scss.info}>
                                        <h1 className={scss.timeInfo}>
                                            {item.time}
                                        </h1>
                                        <h1 className={scss.priceInfo}>
                                            {item.price},00 $
                                        </h1>
                                        <h1 className={scss.blockInfo}>
                                            {item.payment}
                                        </h1>
                                        <div className={scss.advantages}>
                                            {item.advantages.map(
                                                (data, index) => (
                                                    <h1
                                                        key={index}
                                                        className={
                                                            scss.advantage
                                                        }
                                                    >
                                                        ✓ {data}
                                                    </h1>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className={scss.action}>
                                        <button className={scss.button}>
                                            {t("Жазылуу", "Оформить подписку")}{" "}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h1 className={scss.cardsInfo}>
                            {t(
                                "Акча автоматтык түрдө алынат. Ар дайым жеке кабинетиңизден жазылууну токтотуп, акча алуу процессин токтото аласыз",
                                "Списания будут автоматическими. Вы всегда можете отменить подписку в Вашем личном кабинете и больше списаний не будет"
                            )}
                        </h1>
                    </div>
                </div>
            </div>
            <DoYouHave />
            <Request />
        </section>
    );
};

export default Package;
