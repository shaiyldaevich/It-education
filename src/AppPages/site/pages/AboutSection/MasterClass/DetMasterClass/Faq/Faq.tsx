"use client";
import React, { useState } from "react";
import scss from "./Faq.module.scss";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionItem {
    question: string;
    answer: string;
}

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { t } = useLanguageStore();

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData: AccordionItem[] = [
        {
            question: t(
                "Oкунуу кантип баштасам болот?",
                "Как мне начать обучение ?"
            ),
            answer: t(
                "Абдан оңой – катталуу. Бул болгону бир нече мүнөттү талап кылат. Электрондук почта жана телефон номери аркылуу аккаунт түзүңүз. Мастер-класс төлөм жүргүзүлгөндөн кийин же ишке кирүү күнү дароо жеткиликтүү болот.",
                "Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска."
            ),
        },
        {
            question: t(
                "Мен жазылууну автоматтык жаңыртуудан баш тарта аламбы",
                "Могу ли я отказаться от автопродления подписки"
            ),
            answer: t(
                "Ооба, сиз жазылууну автоматтык түрдө жаңыртуудан каалаган убакта баш тартсаңыз болот.",
                "Да, вы можете отказаться от автопродления подписки в любое время."
            ),
        },
        {
            question: t(
                "Мен акчаны кайтарып ала аламбы",
                "Могу ли я вернуть деньги"
            ),
            answer: t(
                "Акча кайтаруу саясаты сиздин жазылууңуздун шарттарына көз каранды.",
                "Политика возврата средств зависит от условий вашей подписки."
            ),
        },
    ];

    return (
        <section className={scss.Faq}>
            <div className="container">
                <div className={scss.content}>
                    <h1>FAQ</h1>
                    <h2>{t("Суроолор калдыбы?", "Остались вопросы?")}</h2>
                    <div className={scss.accordion}>
                        {accordionData.map((item, index) => (
                            <div key={index} className={scss.accordionItem}>
                                <button
                                    className={scss.accordionHeader}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {item.question}
                                    <span className={scss.icon}>
                                        {activeIndex === index ? (
                                            <IoIosArrowUp />
                                        ) : (
                                            <IoIosArrowDown />
                                        )}
                                    </span>
                                </button>
                                <div
                                    className={`${scss.accordionContent} ${
                                        activeIndex === index ? scss.open : ""
                                    }`}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
