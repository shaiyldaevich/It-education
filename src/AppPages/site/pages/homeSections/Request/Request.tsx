"use client";

import React from "react";
import scss from "./Request.module.scss";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Request = () => {
    const { t } = useLanguageStore();

    return (
        <section className={scss.Request}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.info}>
                        <h1 className={scss.title}>
                            {t("Өтүнмө калтыруу", "Оставить заявку")}
                        </h1>
                        <h1 className={scss.text}>
                            {t(
                                "Кыскача формадагы негизги суроолорду толтуруңуз, биз сиз менен баарлашууга даярданабыз",
                                "Заполните краткую форму с ключевым вопросами, и мы подготовимся к разговору с вами"
                            )}{" "}
                        </h1>
                    </div>
                    <div className={scss.forum}>
                        <div className={scss.inputBlock}>
                            <h1 className={scss.inputText}>
                                {t("Аты-жөнү*", "ФИО*")}
                            </h1>
                            <input className={scss.input} type="text" />
                        </div>
                        <div className={scss.inputBlock}>
                            <h1 className={scss.inputText}>
                                {t("Телефон номери*", "Номер телефон*")}
                            </h1>
                            <input className={scss.input} type="text" />
                        </div>
                        <div className={scss.inputBlock}>
                            <h1 className={scss.inputText}>Email*</h1>
                            <input className={scss.input} type="text" />
                        </div>
                        <div className={scss.action}>
                            <button className={scss.button}>
                                {" "}
                                {t("Жөнөтүү", "Отправить")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Request;
