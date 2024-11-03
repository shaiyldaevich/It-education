"use client";
import React from "react";
import scss from "./MasterClass.module.scss";
import { useRouter } from "next/navigation";
const Master = [
  {
    title: "Реактивное программирование на Java: как, зачем и стоит ли? ",
    description:
      "Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++ ...",
  },
  {
    title: "Реактивное программирование на Java: как, зачем и стоит ли? ",
    description:
      "Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++ ...",
  },
  {
    title: "Реактивное программирование на Java: как, зачем и стоит ли? ",
    description:
      "Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++ ...",
  },
];
const MasterClass = () => {
  const nav = useRouter();
  return (
    <section className={scss.MasterClass}>
      <div className="container">
        <div className={scss.content}>
          <h1>Мастер-классы</h1>
          <div className={scss.cards}>
            {Master.map((item, index) => (
              <div key={index} className={scss.card}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className={scss.buttons}>
            <button onClick={() => nav.push("/allMasterClass")}>
              Все мастер классы
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterClass;
