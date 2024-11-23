import React from "react";
import styles from "./Subscriptions.module.scss";
import MyProfile from "../profile/MyProfile";
import { Typography } from "@/UI/Typography/Typography";
import Ok from "@/assets/Ok";

interface Subscription {
  tarif: string;
  status: string;
  summa: string;
  cardNum: string;
  date: string;
}
const Subscriptions = () => {
  const subscription: Subscription[] = [
    {
      tarif: "Год",
      status: "Начальная",
      summa: "220.00 $",
      cardNum: "5106 21 ХХ ХХХХ 4186",
      date: "30 . 09.  2022 г",
    },
  ];

  const card = [
    {
      date: "Месяц +",
      summ: "105,00 $",
      feat1: "Все статьи",
      feat2: "Все мастер классы",
      feat3: "6 новых статей каждый месяц",
      feat4: "Доступ к курсу “DevOps - инженер”",
    },
    {
        date: "Месяц +",
        summ: "105,00 $",
        feat1: "Все статьи",
        feat2: "Все мастер классы",
        feat3: "6 новых статей каждый месяц",
        feat4: "Доступ к курсу “DevOps - инженер”",
      },
      
  ];
  return (
    <section className={styles.mainBlog}>
      <div className="container">
        <div className={styles.mainBlog}>
          <div className={styles.profil}>
            <MyProfile />
          </div>

          <div className={styles.mainTarif}>
            <div className={styles.subscription}>
              <Typography variant="h2" weight="regularM">
                Подписки
              </Typography>
              <div>
                {subscription.map((el, index) => (
                  <div key={index} className={styles.textInfo}>
                    <div className={styles.text1}>
                      <Typography variant="bodyXL" weight="regularM">
                        Тариф :
                      </Typography>
                      <Typography variant="bodyXL" weight="regularM">
                        Статус :
                      </Typography>
                      <Typography variant="bodyXL" weight="regularM">
                        Сумма :
                      </Typography>
                      <Typography variant="bodyXL" weight="regularM">
                        Карта :
                      </Typography>
                      <Typography variant="bodyXL" weight="regularM">
                        Действует до :
                      </Typography>
                    </div>
                    <div className={styles.text2}>
                      <Typography variant="bodyXL" weight="regularM">
                        {el.tarif}
                      </Typography>
                      <Typography variant="bodyXL" weight="regularM">
                        {el.status}
                      </Typography>
                      <Typography variant="bodyXL" weight="regularM">
                        {el.summa}
                      </Typography>
                      <Typography variant="bodyXL" weight="regularM">
                        {el.cardNum}
                      </Typography>
                      <Typography variant="bodyXL" weight="regularM">
                        {el.date}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.tarifBlock}>
              <Typography variant="h2" weight="bold">
                Другие тарифы
              </Typography>
              <div className={styles.tarifCards}>
                {card.map((el, index) => (
                  <div key={index} className={styles.Card}> 
                    <Typography variant="bodyL" weight="regular">
                      {el.date}
                    </Typography>
                    <Typography variant="h2" weight="regularM">
                      {el.summ}
                    </Typography>
                    <button className={styles.btn1} type="submit">Ежемесячно</button>
                    <Typography variant="bodyL" weight="bold">
                     <Ok/> {el.feat1}
                    </Typography>
                    <Typography variant="bodyL" weight="bold">
                    <Ok/> {el.feat2}
                    </Typography>
                    <Typography variant="bodyL" weight="bold">
                    <Ok/> {el.feat3}
                    </Typography>
                    <Typography variant="bodyL" weight="bold">
                    <Ok/> {el.feat4}
                    </Typography>
                   <div className={styles.btn}>
                   <button>Оформить подписку</button>
                   </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
