"use client";

import { useLanguageStore } from "@/stores/useLanguageStore";
import React, { useState } from "react";
import scss from "./Subscribe.module.scss";
import Link from "next/link";
import ModalWindow from "@/UI/ModalWindow/ModalWindow";

const Subscribe = () => {
    const { t } = useLanguageStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className={scss.Subscribe}>
            <ModalWindow isOpen={isModalOpen} onClose={closeModal} />

            <div className={scss.content}>
                <div className={scss.path}>
                    <Link href={"/HomePage"} className={scss.pathText1}>
                        {t("Башкы /", "Главная /")}
                    </Link>
                    <Link href={`/subscribe`} className={scss.pathText2}>
                        {t("Катталу", "Оформить подписку")}
                    </Link>
                </div>
                <h1 className={scss.title}>{t("Жыл", "Год")}</h1>
                <div className={scss.nameInput}>
                    <h1 className={scss.inputText}>Ф.И.О*</h1>
                    <input type="text" className={scss.input} />
                </div>
                <div className={scss.numberInput}>
                    {" "}
                    <h1 className={scss.inputText}>Телефон*</h1>
                    <div className={scss.inputBlock}>
                        <h1 className={scss.inputBlockText}>+996</h1>
                        <input type="number" className={scss.input} />
                    </div>
                </div>
                <div className={scss.emailInput}>
                    {" "}
                    <h1 className={scss.inputText}>E mail*</h1>
                    <input type="email" className={scss.input} />
                </div>
                <div className={scss.card}>
                    {" "}
                    <h1 className={scss.inputText}>
                        {t(
                            "Төлөм картасын тандаңыз",
                            "Выберите платежную карту"
                        )}
                    </h1>
                    <div className={scss.checkBoxes}>
                        <div className={scss.checkBox}>
                            <input
                                type="checkbox"
                                id="checkbox1"
                                className={scss.customCheckbox}
                            />
                            <label htmlFor="checkbox1"></label>
                            <h1 className={scss.cardText}>Visa</h1>
                        </div>
                        <div className={scss.checkBox}>
                            <input
                                type="checkbox"
                                id="checkbox2"
                                className={scss.customCheckbox}
                            />
                            <label htmlFor="checkbox2"></label>{" "}
                            <h1 className={scss.cardText}>MasterCard</h1>
                        </div>{" "}
                    </div>
                </div>
                <div className={scss.cardNumber}>
                    {" "}
                    <h1 className={scss.inputText}>
                        {t("Картанын номери *", "Номер карты *")}
                    </h1>
                    <input type="number" className={scss.input} />
                </div>
                <div className={scss.cardCode}>
                    <div className={scss.year}>
                        <h1 className={scss.inputText}>ММ/ГГ *</h1>{" "}
                        <input type="number" className={scss.input} />
                    </div>
                    <div className={scss.cvc}>
                        <h1 className={scss.inputText}>CVC *</h1>{" "}
                        <input type="number" className={scss.input} />
                    </div>
                </div>
                <div className={scss.actions}>
                    <button className={scss.button} onClick={openModal}>
                        {t("Төлөм жасоо ", "Оплатить ")}
                        200.00 $
                    </button>
                    <div className={scss.checkBox}>
                        <input
                            type="checkbox"
                            id="checkbox3"
                            className={scss.customCheckbox}
                        />
                        <label htmlFor="checkbox3"></label>{" "}
                        <h1 className={scss.text}>
                            {t(
                                "Мен кызмат көрсөтүү шарттары менен тааныштым жана макулмун",
                                "Я ознакомился и согласен с Условиями оказания услуг "
                            )}
                        </h1>
                    </div>{" "}
                </div>
                <div className={scss.infos}>
                    <h1 className={scss.text}>
                        {t(
                            "Бардык мастер-класстар биздин мектепте",
                            "Все мастер-классы нашей школы"
                        )}
                    </h1>
                    <h1 className={scss.text}>
                        {t(
                            "Ар айда 6 жаңы макала.",
                            "6 новых статей каждый месяц."
                        )}
                    </h1>
                    <h1 className={scss.text}>
                        {t(
                            "Билим берүү платформасы жылдык жазылуу шарттары менен жеткиликтүү.",
                            "Образовательная платформа доступна на условиях ежегодной подписки."
                        )}
                    </h1>
                    <h1 className={scss.title}>
                        {t(
                            "Башка жазылуу түрлөрү:",
                            "Другие варианты подписки:"
                        )}
                    </h1>
                    <div className={scss.textBlock}>
                        <h1 className={scss.text}>
                            {t("Жыл + - 585,00 $/жыл", "Год + - 585,00 $/год")}
                        </h1>
                        <h1 className={scss.text}>
                            {t("Ай - 105,00 $/жыл", "Месяц - 105,00 $/год")}
                        </h1>
                    </div>
                    <h1 className={scss.text}>
                        {t(
                            "Кандай болбосун, жазылууну токтотсоңуз болот!",
                            "Отменить можно в любой момент!"
                        )}
                    </h1>
                    <h1 className={scss.lilText}>
                        {t(
                            "Fondy аркылуу төлөөдө, сиздин картаңыздан автоматтык түрдө 225,00 $/жыл алынат, бул катышуунун стандарттык баасы.",
                            "При оплате через Fondy, с Вашей карты автоматически будут списываться 225,00 $/год, которые являются стандартной ценой участия."
                        )}
                    </h1>
                    <h1 className={scss.lilText}>
                        {t(
                            "Сиз ар дайым жеке кабинетиңизде жазылууну токтото аласыз жана кайрадан төлөм алынып калбайт.",
                            "Вы всегда можете отменить подписку в Вашем личном кабинете и больше списаний не будет."
                        )}
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
