"use client";

import React from "react";
import scss from "./Buy.module.scss";
import { useParams } from "next/navigation";
import Link from "next/link";
import BuyInputs from "./BuySections/BuyInputs/BuyInputs";

const Buy = () => {
    const params = useParams();
    const courseId = Number(params?.confirm);

    const courses = [
        {
            id: 1,
            teacherProfession: "Frontend разработчик",

            access: "навсегда",
            includes: ["9 модулей"],
            price: 200,
            about: "Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. ",
            teacher: "Евгений Александрович",
            materials: "60 материалов",
            name: "Frontend-разработчик",
            info: "Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом.",
        },
        {
            id: 2,
            teacherProfession: "Frontend разработчик",

            teacher: "Евгений Александрович",
            about: "Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. ",
            includes: ["6 модулей"],
            access: "месяц",
            price: 900,
            materials: "90 материалов",
            name: "Backend-разработчик",
            info: "Специалист, который отвечает за построение логики для воплощения любой идеи.",
        },
        {
            id: 3,
            teacherProfession: "Frontend разработчик",
            about: "Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. ",
            teacher: "Евгений Александрович",
            includes: ["3 модулей", "30 материалов"],
            price: 40,
            access: "год",
            name: "UX / UI Дизайнер",
            info: "Креативный специалист, который придумывает дизайн и интерфейс продукта.",
        },
    ];

    const selectedCourse = courses.find((course) => course.id === courseId);

    if (!selectedCourse) {
        return (
            <p>Курс не найден. Пожалуйста, проверьте правильность ссылки.</p>
        );
    }

    return (
        <section className={scss.Buy}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.path}>
                        <Link href={"/"} className={scss.pathText1}>
                            Главная /
                        </Link>
                        <Link
                            href={`/confirm/${selectedCourse.id}`}
                            className={scss.pathText2}
                        >
                            Зарегистрироваться на курс
                        </Link>
                    </div>
                    <div className={scss.forumBlock}>
                        <h1 className={scss.title}>
                            Зарегистрироваться на курс
                        </h1>
                        <div className={scss.forum}>
                            <div className={scss.info}>
                                <div className={scss.course}>
                                    <h1 className={scss.courseTitle}>Курс</h1>
                                    <h1 className={scss.courseName}>
                                        {selectedCourse.name}
                                    </h1>
                                    <h1 className={scss.courseText}>
                                        {selectedCourse.about}
                                    </h1>
                                </div>
                                <div className={scss.br}></div>
                                <div className={scss.teacher}>
                                    {" "}
                                    <h1 className={scss.courseTitle}>Лектор</h1>
                                    <h1 className={scss.courseName}>
                                        {selectedCourse.teacher}
                                    </h1>
                                    <h1 className={scss.courseText}>
                                        {selectedCourse.teacherProfession}
                                    </h1>
                                </div>{" "}
                                <div className={scss.br}></div>
                                <div className={scss.access}>
                                    <div className={scss.include}>
                                        <h1 className={scss.courseTitle}>
                                            В курс входит
                                        </h1>
                                        {selectedCourse.includes.map(
                                            (include, index) => (
                                                <h1
                                                    key={index}
                                                    className={scss.includeText}
                                                >
                                                    ● {include}
                                                </h1>
                                            )
                                        )}
                                    </div>
                                    <div className={scss.accessBlock}>
                                        <h1 className={scss.courseTitle}>
                                            Доступ
                                        </h1>
                                        <h1 className={scss.includeText}>
                                            {selectedCourse.access}
                                        </h1>
                                    </div>
                                </div>{" "}
                                <div className={scss.br}></div>
                                <div className={scss.courseInfo}>
                                    <h1 className={scss.includeText}>
                                        * - материалы включают уроки, тесты и
                                        задания. Некоторые материалы могут быть
                                        недоступны при самостоятельном обучении.{" "}
                                    </h1>
                                </div>
                            </div>
                            <BuyInputs />{" "}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Buy;
