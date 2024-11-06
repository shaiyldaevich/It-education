"use client";

import React from "react";
import scss from "./SecondLearnProcess.module.scss";
import { useLanguageStore } from "@/stores/useLanguageStore";

const SecondLearnProcess = () => {
    const { t } = useLanguageStore();

    return (
        <section className={scss.SecondLearnProcess}>
            <div className="container">
                <div className={scss.content}>
                    <h1 className={scss.title}>
                        {t("Окуу процесс", "Процесс обучения")}
                    </h1>
                    <div className={scss.blocks}>
                        <div className={scss.block}>
                            <h1 className={scss.number}>1</h1>
                            <h1 className={scss.blockTitle}>
                                {t("Мастер-класс", "Мастер-класс")}
                            </h1>
                            <h1 className={scss.text}>
                                {t(
                                    "Мастер-класска бардык сабактарга жана башка кошумча материалдарга жеткиликтүү болот",
                                    "Вы получите доступ ко всем урокам мастер-класса и другим дополнительным материалам"
                                )}
                            </h1>
                        </div>
                        <div className={scss.block}>
                            <h1 className={scss.number}>2</h1>
                            <h1 className={scss.blockTitle}>
                                {t("Өз расписание", "Своё расписание")}
                            </h1>
                            <h1 className={scss.text}>
                                {t(
                                    "Мастер-класстарга жеткиликтүүлүк 24/7. Кийинки сабагыңыз качан болорун өзүңүз чечесиз",
                                    "Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у вас следующий урок"
                                )}
                            </h1>
                        </div>
                        <div className={scss.block}>
                            <h1 className={scss.number}>3</h1>
                            <h1 className={scss.blockTitle}>
                                {t("Жамаат", "Сообщество")}
                            </h1>
                            <h1 className={scss.text}>
                                {t(
                                    "Башка студенттер менен комментарийлерде пикир алмашуу мүмкүнчүлүгүңүз болот",
                                    "Вы сможете общаться и обмениваться мнениями с другими учениками в комментариях"
                                )}
                            </h1>
                        </div>
                        <div className={scss.block}>
                            <h1 className={scss.number}>4</h1>
                            <h1 className={scss.blockTitle}>
                                {t("Жеткиликтүүлүк", "Доступ")}
                            </h1>
                            <h1 className={scss.text}>
                                {t(
                                    "Биз сизге төлөнгөн мастер-класстардын бардык материалдарына чексиз жеткиликтүүлүктү сунуштайбыз",
                                    "Мы предоставляем вам бессрочный доступ к материалам любого оплаченного мастер-класса"
                                )}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondLearnProcess;
