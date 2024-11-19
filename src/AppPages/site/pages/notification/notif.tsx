"use client";
import React from "react";
import { LuCalendar } from "react-icons/lu";
import scss from "./notif.module.scss";
import Link from "next/link";
import { useLanguageStore } from "@/stores/useLanguageStore";

const notify = [
  {
    icon: <LuCalendar />,
    date: "02.05.2022 г",
    title: "Вы оформили подписку пакет  “год” ",
  },
];
const Notif = () => {
  const { t } = useLanguageStore();
  return (
    <section className={scss.notify}>
      <div className="container">
        <Link className={scss.homeNav} href={"/"}>
          {t("Башкы бет", "Главная")}/
        </Link>

        <Link className={scss.nav} href={"/allMasterClass"}>
          {t("Бардык мастер-класстар", "Мастер классы")}/
        </Link>
        <div className={scss.content}>
          <h1>Уведомления</h1>
          <div className={scss.cards}>
            {notify.length > 0 ? (
              notify.map((item, index) => (
                <div key={index} className={scss.card}>
                  <a>{item.icon}</a>
                  <div className={scss.text}>
                    <h2>{item.date}</h2>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className={scss.emptyMessage}>Уведомлений нет</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notif;
