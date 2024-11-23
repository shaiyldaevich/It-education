import React from "react";
import styles from "./PaymentCards.module.scss";
import MyProfile from "../profile/MyProfile";
import { Typography } from "@/UI/Typography/Typography";
import Image from "next/image";
import visa1 from "@/assets/visa1.svg";
import visa2 from "@/assets/visa2.svg";
import visa3 from "@/assets/visa3.svg";
import AddToCard from "../comments/addToCard/AddToCard";

const PaymentCards = () => {
  const visa = [
    {
      name: "Visa Classic",
      img1: visa1,
      img2: visa2,
      number: "4000 1234 5678 9010",
      date: "12/34",
      img3: visa3,
    },
    {
      name: "Visa Classic",
      img1: visa1,
      img2: visa2,
      number: "4000 1234 5678 9010",
      date: "12/34",
      img3: visa3,
    },
    {
      name: "Visa Classic",
      img1: visa1,
      img2: visa2,
      number: "4000 1234 5678 9010",
      date: "12/34",
      img3: visa3,
    },
    {
      name: "Visa Classic",
      img1: visa1,
      img2: visa2,
      number: "4000 1234 5678 9010",
      date: "12/34",
      img3: visa3,
    },
  ];
  return (
    <div className="container">
      <div className={styles.mainBlog}>
        <div className={styles.profil}>
          <MyProfile />
        </div>
        <div className={styles.block}>
          <div className={styles.mainCard}>
            <Typography variant="h2" weight="regularM">
              Платежные карты
            </Typography>
            <div className={styles.mainVisa}>
              {visa.map((el, index) => (
                <div key={index} className={styles.cardVisa}>
                  <Typography variant="h4" weight="regularM">
                    {el.name}
                  </Typography>
                  <div className={styles.cardImage}>
                    <Image src={el.img1} alt={"img"} />
                    <Image src={el.img2} alt={"img"} />
                  </div>
                  <div className={styles.cardDate}>
                    <Typography variant="h5" weight="regularM">
                      {el.number}
                    </Typography>
                    <Typography variant="bodyL" weight="light">
                      {el.date}
                    </Typography>
                    <Image src={el.img3} alt="img" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AddToCard />
        </div>
      </div>
    </div>
  );
};

export default PaymentCards;
