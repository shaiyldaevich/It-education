"use client";

import React from "react";
import scss from "./MoreCourses.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";

const MoreCourses = () => {
    const router = useRouter();

    const courses = [
        {
            id: 1,
            access: "навсегда",
            modules: "9 модулей",
            price: 200,

            materials: "60 материалов",
            name: "Frontend-разработчик",
            info: "Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты",
        },
        {
            id: 2,
            access: "месяц",
            modules: "6 модулей",
            price: 900,

            materials: "90 материалов",
            name: "Backend-разработчик",
            info: "Специалист, который отвечает за построение логики для воплощения любой идеи. Он собирает фундамент и опорную систему для проекта - от простого сайта для магазина одежды до сложных вычислительных систем нейронных сетей.",
        },
        {
            id: 3,
            modules: "3 модулей",
            materials: "30 материалов",
            price: 40,
            access: "год",
            name: "UX / UI Дизайнер",
            info: "Креативный специалист, который придумывает дизайн и интерфейс продукта. Специалист UX/UI отвечает за подбор форм, цветов, Функциональности дизайна и прочих важных параметров для комфорьного использования продукта.",
        },
        {
            id: 2,
            access: "месяц",
            modules: "6 модулей",
            price: 900,

            materials: "90 материалов",
            name: "Backend-разработчик",
            info: "Специалист, который отвечает за построение логики для воплощения любой идеи. Он собирает фундамент и опорную систему для проекта - от простого сайта для магазина одежды до сложных вычислительных систем нейронных сетей.",
        },
        {
            id: 1,
            access: "навсегда",
            modules: "9 модулей",
            price: 200,

            materials: "60 материалов",
            name: "Frontend-разработчик",
            info: "Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проекты",
        },
        {
            id: 3,
            modules: "3 модулей",
            materials: "30 материалов",
            price: 40,
            access: "год",
            name: "UX / UI Дизайнер",
            info: "Креативный специалист, который придумывает дизайн и интерфейс продукта. Специалист UX/UI отвечает за подбор форм, цветов, Функциональности дизайна и прочих важных параметров для комфорьного использования продукта.",
        },
    ];

    const { t } = useLanguageStore();

    return (
        <div className={scss.MoreCourses}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.path}>
                        <Link className={scss.nav} href={"/HomePage"}>
                            {t("Башкы /", "Главная /")}
                        </Link>
                        <Link href={"/MoreCourses"}>
                            {t("Биздин курстар ", "Наши курсы")}
                        </Link>
                    </div>
                    <div className={scss.title}>
                        <h1 className={scss.titleText}>
                            {t("Курстар ", "Курсы")}
                        </h1>
                    </div>
                    <div className={scss.courses}>
                        {" "}
                        {courses.map((item, index) => (
                            <div key={index} className={scss.course}>
                                <div className={scss.infoBlock}>
                                    <h1 className={scss.name}>{item.name}</h1>
                                    <h1 className={scss.info}>{item.info}</h1>
                                </div>
                                <h1
                                    onClick={() =>
                                        router.push(`/AboutSchool/${item.id}`)
                                    }
                                    className={scss.link}
                                >
                                    {t("Толук маалымат →", "Подробнее →")}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreCourses;
