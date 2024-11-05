"use client";
import React from "react";
import scss from "./DetMasterClass.module.scss";
import AboutMasterClass from "./AboutMasterClass/AboutMasterClass";
import ProgramMasterClass from "./Program/ProgramMasterClass";
import WhoMasterClass from "./WhoMove/WhoMasterClass";
import ProcessOfMaster from "./ProcessOfMaster/ProcessOfMaster";
import Faq from "./Faq/Faq";
import { useRouter } from "next/navigation";
import Link from "next/link";
const DetMasterClass = () => {
  const nav = useRouter();
  return (
    <section className={scss.DetMasterClass}>
      <div className="container">
        <Link className={scss.homeNav} href={"/"}>
          Главная/
        </Link>

        <Link className={scss.nav} href={"/allMasterClass"}>
          Мастер классы/
        </Link>
        <Link className={scss.navAb} href={"/allMasterClass"}>
          Реактивное программирование на Java
        </Link>
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
            <button onClick={() => nav.push("/poslePodpiski")}>
              Купить мастер-класс за 46 ${" "}
            </button>
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
      <ProcessOfMaster />
      <Faq />
    </section>
  );
};

export default DetMasterClass;
