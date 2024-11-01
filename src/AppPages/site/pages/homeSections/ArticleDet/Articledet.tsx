import React from "react";
import scss from "./Article.module.scss";
import Image from "next/image";
import img1 from "../../../../../assets/Rectangle 2184.svg";
import followImg from "../../../../../assets/image 13.svg";
import AuthImg from "../../../../../assets/image 18.svg"
import { CgNotes } from "react-icons/cg";
const Last = [
  {
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. ",
    date: "01.02.2022",
  },
  {
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. ",
    date: "01.02.2022",
  },
  {
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. ",
    date: "01.02.2022",
  },
];
const Articledet = () => {
  return (
    <section className={scss.ArticleDet}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            Мы подготовили подборку самых популярных <br /> курсов по
            направлению Java в IBS Training Center.
          </h1>
          <p>
            Когда-то ни один крупный проект не обходился без применения <br />
            функционального и асинхронного программирования. Эти подходы до сих
            пор <br /> популярны за счет своих преимуществ: они помогают
            выдерживать большие
            <br /> нагрузки и писать эффективный код, не теряя в скорости
            разработки.
          </p>
          <Image src={img1} alt="alt" />
          <div className={scss.text_cont}>
            <p>
              В рамках курса от IBS Training Center вы поймете, как работают
              основные
              <br /> фичи Spring Framework 5, и узнаете:
            </p>
            <ul>
              <li>Какие существуют конфигурации для Spring Framework 5;</li>
              <li>
                Как работать с REST-сервисами и документацией при помощи
                Swagger.
              </li>
              <li>Что такое бины и как с ними работать;</li>
              <li>Что такое Концепция IoC;</li>
              <li>Примеры использования AOP;</li>
            </ul>
          </div>
          <div className={scss.follow}>
            <div className={scss.left}>
              <Image src={followImg} alt="" />
              <div className={scss.text_cont}>
                <p>
                  Оформите подписку, чтобы <br /> посмотреть полную версию
                </p>
                <div className={scss.text_cont_auth}>
                  <h4>Вы уже авторизованы?</h4>
                  <button>Авторизуйтесь </button>
                </div>
              </div>
            </div>
            <div className={scss.btn}>
              <button>Получить доступ за 225,00$</button>
            </div>
          </div>
          <h1>Комментарии</h1>
          <div className={scss.Auth}>
            <div className={scss.left}>
            <Image src={AuthImg} alt="Auth" />
            <div className={scss.text_auth}>
              <h4>Вы не зарегистрировались!</h4>
              <div className={scss.text_auth_cont}>
                <p>
                  Чтобы оставить комментарий, пожалуйста авторизуйтесь или{" "}
                  <br />
                  зарегитрируйтесь.
                </p>
              </div>
            </div>
            </div>
            <div className={scss.btn}>
              <button>Зарегистрироваться</button>
            </div>
          </div>
          <div className={scss.others}>
            <h1>Другие статьи </h1>
            <div className={scss.other_cards}>
              {Last.map((item, index) => (
                <div className={scss.card} key={index}>
                  <div className={scss.card_title}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className={scss.buttons}>
                    <button
                    // onClick={() => nav.push(`/article/${item.description.slice(0,20)}`)}
                    >
                      <span>
                        <CgNotes />
                      </span>
                      читать
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
