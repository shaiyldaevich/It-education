"use client";
import React from "react";
import scss from "./MasterClass.module.scss";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Master = [
  {
    title: "Реактивное программирование на Java: как, зачем и стоит ли? ",
    description:
      "Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++ ...",
  },
  {
    title: "Олимпиада для айтишников: как мотивировать молодых разработчиков ",
    description:
      "В современном HR широко распространены событийные мотивационные мероприятия, как внешние, так и внутренние – различные социальные проекты, выставки, праздники, мастер-классы и тренинги, спортивные и ЗОЖ.",
  },
  {
    title:
      "Семинар Дино Эспозито “Real-time Data Coming at Last in ASP.NET Core” ",
    description:
      "Евангелистом разработки под Android и на Kotlin в JetBrains, а также членом команды, которая ведет WURFL, базу данных с информацией о мобильных устройствах, которая используется такими компаниями....",
  },
];

const MasterClass = () => {
  const nav = useRouter();
  const { t } = useLanguageStore();

  return (
    <section className={scss.MasterClass}>
      <div className="container">
        <div className={scss.content}>
          <h1>{t("Мастер-класстар", "Мастер-классы")}</h1>
          <div className={scss.cards}>
            {Master.map((item, index) => (
              <div
                key={index}
                className={scss.card}
                onClick={() =>
                  nav.push(`/allMasterClass/${item.description.slice(0, 30)}`)
                }
              >
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className={scss.buttons}>
            <button onClick={() => nav.push("/allMasterClass")}>
              {t("Баардык мастеркласстар", "Все мастер классы")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterClass;
