import React from "react";
import scss from "./DetMasterClass.module.scss";
import AboutMasterClass from "./AboutMasterClass/AboutMasterClass";
import ProgramMasterClass from "./Program/ProgramMasterClass";
import WhoMasterClass from "./WhoMove/WhoMasterClass";
const DetMasterClass = () => {
  return (
    <section className={scss.DetMasterClass}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <h1>
              Реактивное программирование на Java : как, зачем и стоит ли? Часть
              1
            </h1>
            <p>
              Идея реактивного программирования появилась сравнительно недавно,
              лет 10 назад. Что вызвало популярность этого относительно нового
              подхода и почему сейчас он в тренде, рассказал на конференции{" "}
            </p>
            <button>Купить мастер-класс за 46 $ </button>
          </div>
          <div className={scss.right}>
            <h2>
              Доступ: <span>6 недель</span>
            </h2>
            <h3>
              В мастер-класс входит: <span>5 уроков</span>
            </h3>
          </div>
        </div>
      </div>
      <AboutMasterClass />
      <ProgramMasterClass />
      <WhoMasterClass />
    </section>
  );
};

export default DetMasterClass;
