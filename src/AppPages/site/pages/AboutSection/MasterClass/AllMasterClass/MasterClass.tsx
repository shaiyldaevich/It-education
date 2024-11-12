"use client";
import React from "react";
import scss from "./MasterClass.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
  {
    title: "DevOps конференция в Москве",
    description:
      "Сборки на Jenkins с закрытыми глазами? А настроить Docker без смс, переплат и регистрации? Что будет, если билд соберется в течение одной миллисекунды? Эти и другие паранормальные явления слетятся обсудить более 400 человек...",
  },
  {
    title: "Олимпиада для айтишников: как мотивировать молодых разработчиков ",
    description:
      "В современном HR широко распространены событийные мотивационные мероприятия, как внешние, так и внутренние – различные социальные проекты, выставки, праздники, мастер-классы и тренинги, спортивные и ЗОЖ.",
  },
  {
    title: "Как научиться учиться. ",
    description:
      "Только за своим столом, но и в других местах - чтобы в непривычной ситуации нужная информация не вылетела из головы. Перед экзаменом, тестом, сертификацией можно повторять “по нарастающей” - каждый день чуть больше, чем в предыдущий...",
  },
];

const MasterClass = () => {
  const nav = useRouter();
  const { t } = useLanguageStore();

  return (
    <section className={scss.MasterClass}>
      <div className="container">
        <Link className={scss.homeNav} href={"/"}>
          {t("Башкы бет", "Главная")}/
        </Link>

        <Link className={scss.nav} href={"/allMasterClass"}>
          {t("Бардык мастер-класстар", "Мастер классы")}
        </Link>

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
        </div>
      </div>
    </section>
  );
};

export default MasterClass;
