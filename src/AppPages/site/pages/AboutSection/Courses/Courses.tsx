"use client";

import React from "react";
import scss from "./Courses.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Courses = () => {
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
    ];
    const { t } = useLanguageStore();

    return (
        <section className={scss.courses}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.titleBlock}>
                        <h1 className={scss.title}>
                            {" "}
                            {t("Курстар ", "Курсы")}
                        </h1>
                    </div>
                    <div className={scss.coursesBlock}>
                        {courses.map((item) => (
                            <div key={item.id} className={scss.course}>
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
                    <div className={scss.action}>
                        <Link href={"/MoreCourses"} className={scss.button}>
                            {t("Бардык курстар", "Все курсы")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
