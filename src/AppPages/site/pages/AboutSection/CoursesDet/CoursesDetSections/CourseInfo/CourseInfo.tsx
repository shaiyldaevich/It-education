"use client";

import React from "react";
import scss from "./CourseInfo.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";

const CourseInfo = () => {
    const params = useParams();
    const { t } = useLanguageStore();

    const courseId = Number(params?.course);

    const courses = [
        {
            id: 1,
            access: "навсегда",
            includes: ["9 модулей"],
            price: 200,
            details: [
                "Это всё, что ты видишь и кликаешь на сайте или в приложении - картинки, кнопочки, анимации и даже бесячая реклама.",
                "Самые главные инструменты frontend разработки сайтов это JavaScript, HTML и CSS.",
                "В Кыргызстане фронтенд-разработчики востребованы практически в каждой IT-компании. Это также одно из самых популярных направлений для фриланса и удаленной работы. Все потому, что в современном мире сайт нужен каждому",
            ],
            materials: "60 материалов",
            name: "Frontend-разработчик",
            info: "Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты",
        },
        {
            id: 2,
            includes: ["6 модулей"],

            access: "месяц",
            price: 900,
            details: [
                "Это всё, что ты видишь и кликаешь на сайте или в приложении - картинки, кнопочки, анимации и даже бесячая реклама.",
                "Самые главные инструменты frontend разработки сайтов это JavaScript, HTML и CSS.",
                "В Кыргызстане фронтенд-разработчики востребованы практически в каждой IT-компании. Это также одно из самых популярных направлений для фриланса и удаленной работы. Все потому, что в современном мире сайт нужен каждому",
            ],
            materials: "90 материалов",
            name: "Backend-разработчик",
            info: "Специалист, который отвечает за построение логики для воплощения любой идеи. Он собирает фундамент и опорную систему для проекта - от простого сайта для магазина одежды до сложных вычислительных систем нейронных сетей.",
        },
        {
            id: 3,
            includes: ["3 модулей", "30 материалов"],
            price: 40,
            access: "год",
            details: [
                "Это всё, что ты видишь и кликаешь на сайте или в приложении - картинки, кнопочки, анимации и даже бесячая реклама.",
                "Самые главные инструменты frontend разработки сайтов это JavaScript, HTML и CSS.",
                "В Кыргызстане фронтенд-разработчики востребованы практически в каждой IT-компании. Это также одно из самых популярных направлений для фриланса и удаленной работы. Все потому, что в современном мире сайт нужен каждому",
            ],
            name: "UX / UI Дизайнер",
            info: "Креативный специалист, который придумывает дизайн и интерфейс продукта. Специалист UX/UI отвечает за подбор форм, цветов, Функциональности дизайна и прочих важных параметров для комфорьного использования продукта.",
        },
    ];

    const selectedCourse = courses.find((course) => course.id === courseId);

    return (
        <div className={scss.CourseInfo}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.path}>
                        <Link className={scss.coursePath} href={"#"}>
                            {t("Эмне, кантип жана эмнеге", "Что, как и почему")}
                        </Link>
                    </div>
                    <div className={scss.courseBlock}>
                        {selectedCourse ? (
                            <div className={scss.course}>
                                <div className={scss.info}>
                                    <h1 className={scss.name}>О КУРСЕ</h1>
                                    <div className={scss.courseDetInfo}>
                                        {selectedCourse.details?.map(
                                            (text, index) => (
                                                <h1
                                                    key={index}
                                                    className={scss.text}
                                                >
                                                    {text}
                                                </h1>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className={scss.advantages}>
                                    <div className={scss.access}>
                                        <h1 className={scss.accessTitle}>
                                            {t("Кириш:", "Доступ:")}
                                        </h1>
                                        <h1 className={scss.accessInfo}>
                                            {selectedCourse.access}
                                        </h1>
                                    </div>
                                    <div className={scss.includes}>
                                        {" "}
                                        <h1 className={scss.includeTitle}>
                                            {t(
                                                "Курска кирет:",
                                                "В курс входит:"
                                            )}{" "}
                                        </h1>
                                        <div className={scss.includes}>
                                            {selectedCourse.includes.map(
                                                (include, index) => (
                                                    <div key={index}>
                                                        <h1
                                                            className={
                                                                scss.includeText
                                                            }
                                                        >
                                                            {include}
                                                        </h1>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>error 404</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;
