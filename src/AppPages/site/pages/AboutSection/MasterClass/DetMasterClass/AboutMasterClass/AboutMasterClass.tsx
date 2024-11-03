import React from "react";
import scss from "./AboutMasterClass.module.scss";
const AboutMasterClass = () => {
  return (
    <div className={scss.AboutMasterClass}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <h3>Что, как и почему</h3>
            <h1>О МАСТЕР-КЛАССЕ</h1>
            <p>
              В режиме мастер-класса он продемонстрировал, почему так важен
              неблокирующий ввод-вывод, в чем минусы классической
              многопоточности, в каких ситуациях нужна реактивность, и что она
              может дать. А еще описал недостатки реактивного подхода.
            </p>
            <div className={scss.left_bottom}>
              <h4>Переходите к видеоурокам, что бы научится: </h4>
              <ul>
                <li>Чтению файла (blocked on reading file);</li>
                <li>
                  Что бы научиться базе данных (blocked on reading from DB);
                </li>
                <li>
                  Научится использовать в сложных вычислениях (blocked on heavy
                  calculations);
                </li>
                <li>
                  На ответе от клиента (blocked on responding the client).
                </li>
              </ul>
            </div>
            <div className={scss.buttons}>
              <button>Купить мастер-класс </button>
              <button>Смотреть программу</button>
            </div>
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
    </div>
  );
};

export default AboutMasterClass;
