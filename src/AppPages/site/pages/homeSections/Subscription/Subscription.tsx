"use client";

import { useLanguageStore } from "@/stores/useLanguageStore";
import scss from "./Subscription.module.scss";

import React from "react";

const Subscription = () => {
    const { t } = useLanguageStore();
    return (
        <section className={scss.Subscription}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.info}>
                        <h1 className={scss.infoTitle}>
                            Подпишитесь сейчас за 19,00 $ / мес
                        </h1>
                        <h1 className={scss.infoText}>
                            И получите доступ к материалам и кейсам, а также к
                            новым мастер-классам{" "}
                        </h1>
                    </div>
                    <div className={scss.actions}>
                        <button className={scss.button}>
                            {t("Жазылууну расмийләштирүү", "Оформить подписку")}
                        </button>
                        <h1 className={scss.buttonText}>
                            {t(
                                "Пакеттер жөнүндө толук маалымат",
                                "Подробнее о пакетах"
                            )}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscription;
