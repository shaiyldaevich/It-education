"use client";

import { useParams } from "next/navigation";
import React from "react";
import scss from "./CoursesDet.module.scss";
import Link from "next/link";
import { useLanguageStore } from "@/stores/useLanguageStore";

const CoursesDet = () => {
    const params = useParams();
    const { t } = useLanguageStore();

    const courseId = Number(params?.course);

    const courses = [
        {
            id: 1,
            access: "навсегда",
            includes: ["9 модулей"],
            price: 200,

            materials: "60 материалов",
            name: "Frontend-разработчик",
            info: "Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты",
        },
        {
            id: 2,
            includes: ["6 модулей"],

            access: "месяц",
            price: 900,

            materials: "90 материалов",
            name: "Backend-разработчик",
            info: "Специалист, который отвечает за построение логики для воплощения любой идеи. Он собирает фундамент и опорную систему для проекта - от простого сайта для магазина одежды до сложных вычислительных систем нейронных сетей.",
        },
        {
            id: 3,
            includes: ["3 модулей", "30 материалов"],
            price: 40,
            access: "год",
            name: "UX / UI Дизайнер",
            info: "Креативный специалист, который придумывает дизайн и интерфейс продукта. Специалист UX/UI отвечает за подбор форм, цветов, Функциональности дизайна и прочих важных параметров для комфорьного использования продукта.",
        },
    ];

    const selectedCourse = courses.find((course) => course.id === courseId);

    return (
        <div className={scss.CoursesDet}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.path}>
                        <Link className={scss.navPath} href={"/"}>
                            {t("Башкы /", "Главная /")}
                        </Link>
                        <Link className={scss.navPath} href={"/MoreCourses"}>
                            {" "}
                            {t("Биздин курстар /", "Наши курсы /")}
                        </Link>
                        <Link className={scss.coursePath} href={"#"}>
                            {" "}
                            {selectedCourse?.name}
                        </Link>
                    </div>
                    <div className={scss.courseBlock}>
                        {selectedCourse ? (
                            <div className={scss.course}>
                                <div className={scss.info}>
                                    <h1 className={scss.name}>
                                        {selectedCourse.name}
                                    </h1>
                                    <h1 className={scss.text}>
                                        {selectedCourse.info}
                                    </h1>
                                    <button className={scss.button}>
                                        {t(
                                            "Курс сатып алуу ",
                                            "Купить курс за "
                                        )}
                                        {selectedCourse.price} ${" "}
                                    </button>
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

export default CoursesDet;
