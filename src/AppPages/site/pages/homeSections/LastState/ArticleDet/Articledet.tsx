"use client";
import React from "react";
import scss from "./Article.module.scss";
import Image from "next/image";
import img1 from "../../../../../assets/Rectangle 2184.svg";
import followImg from "../../../../../assets/image 13.svg";
import AuthImg from "../../../../../assets/image 18.svg";
import { CgNotes } from "react-icons/cg";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Last = [
  {
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
    date: "01.02.2022",
  },
  {
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
    date: "01.02.2022",
  },
  {
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
    date: "01.02.2022",
  },
];

const Articledet = () => {
  const { t } = useLanguageStore();

  return (
    <section className={scss.ArticleDet}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            {t(
              "Биз IBS Training Centerдеги Java багыты боюнча эң популярдуу курстарды тандоо даярдадык.",
              "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center."
            )}
          </h1>
          <p>
            {t(
              "Мурда бир дагы ири долбоор функционалдык жана асинхрондук программалоосуз ишке ашпайт эле. Бул ыкмалар дагы эле популярдуу, анткени алар чоң жүктөмдөрдү көтөрүүгө жана иштеп чыгуу ылдамдыгын жоготпостон натыйжалуу код жазууга жардам берет.",
              "Когда-то ни один крупный проект не обходился без применения функционального и асинхронного программирования. Эти подходы до сих пор популярны за счет своих преимуществ: они помогают выдерживать большие нагрузки и писать эффективный код, не теряя в скорости разработки."
            )}
          </p>
          <Image src={img1} alt="alt" />
          <div className={scss.text_cont}>
            <p>
              {t(
                "IBS Training Center курсунун алкагында сиз Spring Framework 5 негизги өзгөчөлүктөрүнүн кантип иштээрин түшүнөсүз жана билесиз:",
                "В рамках курса от IBS Training Center вы поймете, как работают основные фичи Spring Framework 5, и узнаете:"
              )}
            </p>
            <ul>
              <li>
                {t(
                  "Spring Framework 5 үчүн кандай конфигурациялар бар;",
                  "Какие существуют конфигурации для Spring Framework 5;"
                )}
              </li>
              <li>
                {t(
                  "Swagger аркылуу REST кызматтары жана документтештирүү менен кантип иштөө керек.",
                  "Как работать с REST-сервисами и документацией при помощи Swagger."
                )}
              </li>
              <li>
                {t(
                  "Биндер эмне жана алар менен кантип иштөө керек;",
                  "Что такое бины и как с ними работать;"
                )}
              </li>
              <li>
                {t("IoC концепциясы деген эмне;", "Что такое Концепция IoC;")}
              </li>
              <li>
                {t("AOP колдонуу мисалдары;", "Примеры использования AOP;")}
              </li>
            </ul>
          </div>

          {/* /////////////// */}
          <div className={scss.follow}>
            <div className={scss.left}>
              <Image src={followImg} alt="" />
              <div className={scss.text_cont}>
                <p>
                  {t(
                    "Толук версияны көрүү үчүн жазылыңыз",
                    "Оформите подписку, чтобы  посмотреть полную версию"
                  )}
                </p>
                <div className={scss.text_cont_auth}>
                  <h4>
                    {t(
                      "Сиз буга чейин авторизациядан өттүңүзбү?",
                      "Вы уже авторизованы?"
                    )}
                  </h4>
                  <a>{t("Авторизациядан өтүңүз", "Авторизуйтесь")}</a>
                </div>
              </div>
            </div>
            <div className={scss.btn}>
              <button>
                {t("225,00$ үчүн жеткилик алуу", "Получить доступ за 225,00$")}
              </button>
            </div>
          </div>

          {/* /////////////////// */}
          <h1>{t("Комментарийлер", "Комментарии")}</h1>
          <div className={scss.Auth}>
            <div className={scss.left}>
              <Image src={AuthImg} alt="Auth" />
              <div className={scss.text_auth}>
                <h4>
                  {t("Сиз катталган жоксуз!", "Вы не зарегистрировались!")}
                </h4>
                <div className={scss.text_auth_cont}>
                  <p>
                    {t(
                      "Комментарий калтыруу үчүн авторизациядан өтүңүз же катталыңыз.",
                      "Чтобы оставить комментарий, пожалуйста авторизуйтесь или зарегитрируйтесь."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className={scss.btn}>
              <button>{t("Катталуу", "Зарегистрироваться")}</button>
            </div>
          </div>
          <div className={scss.others}>
            <h1>{t("Башка макалалар", "Другие статьи")}</h1>
            <div className={scss.other_cards}>
              {Last.map((item, index) => (
                <div className={scss.card} key={index}>
                  <div className={scss.card_title}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className={scss.buttons}>
                    <button>
                      <span>
                        <CgNotes />
                      </span>
                      {t("окуу", "читать")}
                    </button>
                    <h3>{item.date}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articledet;
