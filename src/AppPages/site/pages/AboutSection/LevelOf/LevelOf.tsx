"use client";
import React from "react";
import scss from "./LevelOf.module.scss";
import { useRouter } from "next/navigation";
const Levels = [
    {
        limit: "Месяц +",
        access: "Все статьи",
        price: "105,00",
        payment: "Ежемесячно",
    },
    {
        limit: "Год +",
        access: " Все Мастер классы и статьи и курсы",
        price: "585,00",
        payment: "Ежегодно",
    },
    {
        limit: "Год +",
        access: " Все Мастер классы и статьи и курсы",
        price: "220,00",
        payment: "Ежегодно",
    },
];
const LevelOf = () => {
    const nav = useRouter();
    return (
        <section className={scss.LevelOf}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.Text_content}>
                        <h1>Уровень пакетов</h1>
                        <p>
                            Списания будут автоматическими. Вы всегда можете
                            отменить подписку в Вашем личном кабинете и больше
                            списаний не будет
                        </p>
                    </div>
                    <div className={scss.cards}>
                        {Levels.map((item, index) => (
                            <div key={index} className={scss.card}>
                                <h1>{item.limit}</h1>
                                <h2>Доступны: {item.access}</h2>
                                <h3>{item.price}</h3>
                                <h4>{item.payment}</h4>
                                <div className={scss.buttons}>
                                    <button>Оформить подписку</button>
                                    <button
                                        onClick={() => nav.push("/Package")}
                                    >
                                        Подробнее
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LevelOf;
