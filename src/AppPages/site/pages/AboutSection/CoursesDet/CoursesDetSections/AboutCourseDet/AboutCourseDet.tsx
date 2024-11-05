"use client";
import React from "react";
import scss from "./AboutCourseDet..module.scss";
import { useParams } from "next/navigation";

const AboutCourseDet = () => {
    const params = useParams();

    const courseId = Number(params?.course);

    const courses = [
        {
            id: 1,
            forWho: "Для людей  с математическим складом ума.",
            uLearn: [
                "HTML",
                "CSS",
                "JAvaScript",
                "Soft skills. Нетехнические навыки",
                "Кроссплатформенность и кроссбраузерность",
                "Управление версиями",
                "Тестирование и отладка",
            ],
        },
        {
            id: 2,
            forWho: "Для людей  с математическим складом ума.",
            uLearn: [
                "HTML",
                "CSS",
                "JAvaScript",
                "Soft skills. Нетехнические навыки",
                "Кроссплатформенность и кроссбраузерность",
                "Управление версиями",
                "Тестирование и отладка",
            ],
        },
        {
            id: 3,

            forWho: "Для людей  с математическим складом ума.",
            uLearn: [
                "HTML",
                "CSS",
                "JAvaScript",
                "Soft skills. Нетехнические навыки",
                "Кроссплатформенность и кроссбраузерность",
                "Управление версиями",
                "Тестирование и отладка",
            ],
        },
    ];

    const selectedCourse = courses.find((course) => course.id === courseId);

    return (
        <div className={scss.AboutCourseDet}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.advantages}>
                        <div className={scss.advantagesTitle}>
                            <h1 className={scss.forWho}> Для кого это </h1>
                            <h1 className={scss.forWhoText}>
                                {selectedCourse?.forWho}
                            </h1>
                        </div>
                    </div>
                    <div className={scss.results}></div>
                    <div className={scss.actions}></div>
                </div>
            </div>
        </div>
    );
};

export default AboutCourseDet;
