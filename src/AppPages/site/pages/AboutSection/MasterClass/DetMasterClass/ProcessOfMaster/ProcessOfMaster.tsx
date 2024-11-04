import React from "react";
import scss from "./Process.module.scss";
import { FaCheck } from "react-icons/fa";
const Process = [
  {
    id: 1,
    title: "Мастер-класс",
    description:
      "Вы получите доступ ко всем урокам мастер-класса и другим дополнительным материалам",
  },
  {
    id: 2,
    title: "Своё расписание",
    description:
      "Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у вас следующий урок",
  },
  {
    id: 3,
    title: "Сообщество",
    description:
      "Вы сможете общаться и обмениваться мнениями с другими учениками в комментариях",
  },
  {
    id: 4,
    title: "Доступ",
    description:
      "Мы предоставляем вам 6 неделный  доступ к материалам оплаченного мастер-классаs",
  },
];
const ProcessOfMaster = () => {
  return (
    <div className={scss.ProcessOfMaster}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.left_text}>
              <h1>Процесс обучения</h1>
              <p>
                Каждый из наших мастер-классов состоит из 2-8 уроков.
                Рекомендуем проходить мастер-класс последовательно, урок за
                уроком
              </p>
            </div>
            <div className={scss.cards}>
              {Process.map((item, index) => (
                <div key={index} className={scss.card}>
                  <h2>{item.id}</h2>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={scss.right}>
            <div className={scss.buyCard}>
              <h1>
                Мастер-класс “Реактивное программирование на Java : как, зачем и
                стоит ли? Часть 1”
              </h1>
              <h2>46,00 $</h2>
              <ul>
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Доступ к мастер классу навсегда
                </li>
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Доступны все 5 уроков
                </li>
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Дополнительные материалы
                </li>
              </ul>
              <div className={scss.buttons}>
                <button>Купить мастер-класс </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessOfMaster;
