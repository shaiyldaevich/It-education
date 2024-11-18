import React from "react";
import scss from "./Coments.module.scss";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Image from "next/image";
const commentsList = [
  {
    id: 1,
    userProfile: "randomImg",
    name: "Осмонова Нурай",
    date: "/  Около минуты назад",
    comment: "Очень понравились уроки. Все более чем понятно! ",
  },
  {
    id: 2,
    userProfile: "randomImg",
    name: "Эгембердиева Кунсулуу",
    date: "/  24.10.2021",
    comment:
      "Классный урок, первый раз вижу такое подробное объяснение всего происходящего ",
  },
  {
    userProfile: "randomImg",
    id: 3,
    name: "Таалайбек Ыманкулов",
    date: "/  24.10.2021",
    comment:
      "Как мне кажется,  в конце видео, необходимо было сказать о том, что информация - это то(в данном случае число) с помощью чего можно устранить некую неопределенность(неизвестность) А так вроде все замечательно. ",
  },
  {
    userProfile: "randomImg",
    id: 4,
    name: "Осмонова Нурай",
    date: "/ 24.10.2021",
    comment:
      "Мой первый день в мире программирования ✨ Первый ролик 😊 Вы просто гениально объясняете, продолжаю смотреть 😉  Спасибо! ",
  },
];
const Comeents = () => {
  const { t } = useLanguageStore();

  return (
    <div className={scss.comments}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.form}>
            <textarea name="" id=""></textarea>
            <button type="submit">{t("Жонотуу", "Отправить")}</button>
          </div>
          <div className={scss.commentsList}>
            {commentsList.map((comment) => (
              <div key={comment.id} className={scss.comment}>
                <div className={scss.commenLeft}>
                  <div className={scss.userProfile}>
                    <img
                      src={comment.userProfile}
                      alt=""
                      // width={50}
                      // height={50}
                    />
                  </div>
                  <div className={scss.commentInfo}>
                    <h3>
                      {comment.name}
                      {""}
                      <span>{comment.date}</span>
                    </h3>
                    <p>{comment.comment}</p>
                    <button>Ответить</button>
                  </div>
                </div>
              </div>
            ))}
            <button>Смотреть все</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comeents;
