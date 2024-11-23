import React from "react";
import styles from "./Comments.module.scss";
import MyProfile from "../profile/MyProfile";
import { Typography } from "@/UI/Typography/Typography";
import img from "../../assets/im1.svg";
import Image from "next/image";

const Comments = () => {
  return (
    <div className={styles.mainComment}>
      <div className={styles.profile}>
        <MyProfile />
      </div>
      <div className={styles.commentBox}>
        <Typography variant="h2" weight="regularM">
          Коментарии
        </Typography>
        <div className={styles.cards}>
          <div className={styles.cardBox}>
            <Image src={img} alt="img" />
            <div className={styles.textMain}>
                <div className={styles.name}>
                    <Typography variant="h5" weight="regular">Осмонова Нурай</Typography>
                    <Typography variant="bodyX" weight="light">26. 05. 2022 г</Typography>
                </div>
                <Typography variant="bodyXL" weight="regular">Урок супер</Typography>
                <div className={styles.delete}>
                    <button >Редактировать </button>
                    <button>Удалить</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
