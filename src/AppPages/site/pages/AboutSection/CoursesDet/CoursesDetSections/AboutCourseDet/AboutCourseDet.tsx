"use client";
import React from "react";
import scss from "./AboutCourseDet..module.scss";
import { useParams } from "next/navigation";
import { Link as Scrollhref } from "react-scroll";
import { useLanguageStore } from "@/stores/useLanguageStore";

const AboutCourseDet = () => {
    const params = useParams();
    const { t } = useLanguageStore();

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
            results: [
                "С каждым днем, с каждым месяцем, с каждым годом вы будете физически ощущать, как ваши мечты и цели воплощаются в реальность. И каждый день, каждый год вы будете видеть, что вы живете той жизнью, которую сами для себя выбрали, и именно по тому сценарию, который вы сами для себя создали.",
                "Ваш новый навык планирования изменит вашу жизнь и поможет отточить умение выстраивать дела в правильной последовательности. Сначала вы будете видеть на неделю вперед, потом - на месяц, потом - на год, а потом вы будете видеть весь свой путь. Система планирования Кайдзен позволит вам правильно планировать правильные вещи и увеличить степень контроля над своей жизнью, чтобы сделать её счастливой и успешной.",
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
            results: [
                "С каждым днем, с каждым месяцем, с каждым годом вы будете физически ощущать, как ваши мечты и цели воплощаются в реальность. И каждый день, каждый год вы будете видеть, что вы живете той жизнью, которую сами для себя выбрали, и именно по тому сценарию, который вы сами для себя создали.",
                "Ваш новый навык планирования изменит вашу жизнь и поможет отточить умение выстраивать дела в правильной последовательности. Сначала вы будете видеть на неделю вперед, потом - на месяц, потом - на год, а потом вы будете видеть весь свой путь. Система планирования Кайдзен позволит вам правильно планировать правильные вещи и увеличить степень контроля над своей жизнью, чтобы сделать её счастливой и успешной.",
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
            results: [
                "С каждым днем, с каждым месяцем, с каждым годом вы будете физически ощущать, как ваши мечты и цели воплощаются в реальность. И каждый день, каждый год вы будете видеть, что вы живете той жизнью, которую сами для себя выбрали, и именно по тому сценарию, который вы сами для себя создали.",
                "Ваш новый навык планирования изменит вашу жизнь и поможет отточить умение выстраивать дела в правильной последовательности. Сначала вы будете видеть на неделю вперед, потом - на месяц, потом - на год, а потом вы будете видеть весь свой путь. Система планирования Кайдзен позволит вам правильно планировать правильные вещи и увеличить степень контроля над своей жизнью, чтобы сделать её счастливой и успешной.",
            ],
        },
    ];

    const selectedCourse = courses.find((course) => course.id === courseId);

    return (
        <section className={scss.AboutCourseDet}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.advantages}>
                        <div className={scss.advantagesTitle}>
                            <h1 className={scss.forWho}>
                                {t("Бул кимге арналган", "Для кого это")}{" "}
                            </h1>
                            <h1 className={scss.forWhoText}>
                                ● {selectedCourse?.forWho}
                            </h1>
                        </div>
                        <div className={scss.uLearn}>
                            <h1 className={scss.uLearnTitle}>
                                {" "}
                                {t("Сиз окуйсуз", "Вы изучтие")}{" "}
                            </h1>
                            <div className={scss.uLearnBlock}>
                                {selectedCourse?.uLearn.map((text, index) => (
                                    <h1 key={index} className={scss.uLearnText}>
                                        ● {text}
                                    </h1>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={scss.results}>
                        <h1 className={scss.resultsTitle}>
                            {t(
                                "Бул курс сизди кайсы жыйынтыктарга алып келиши мүмкүн?",
                                "К каким результатам вас может привести этот курс?"
                            )}
                        </h1>
                        <div className={scss.resultsBlock}>
                            {selectedCourse?.results?.map((texts, index) => (
                                <h1 key={index} className={scss.resultsText}>
                                    {texts}
                                </h1>
                            ))}
                        </div>
                    </div>
                    <div className={scss.actions}>
                        <h1 className={scss.actionsText}>
                            {t(
                                "Окуңуз, курс боюнча алынган билимдерди колдонуп, бактылуу болуңуз!",
                                "Учитесь, применяйте полученные на курсе знания и будьте счастливы!"
                            )}{" "}
                        </h1>
                        <div className={scss.buttons}>
                            <Scrollhref
                                activeClass="active"
                                to="buy"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <button className={scss.buy}>
                                    {t("Курс сатып алуу", "Купить курс")}
                                </button>
                            </Scrollhref>

                            <Scrollhref
                                activeClass="active"
                                to="coursesProgramm"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <button className={scss.check}>
                                    {t(
                                        "Программаны көрүү",
                                        "Смотреть программу"
                                    )}
                                </button>
                            </Scrollhref>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCourseDet;
