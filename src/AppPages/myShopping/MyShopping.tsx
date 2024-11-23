import React from "react";
import styles from "./MyShopping.module.scss";
import MyProfile from "../profile/MyProfile";
import { Typography } from "@/UI/Typography/Typography";

const MyShopping = () => {
  return (
    <section className={styles.mainShopping}>
      <div className="container">
        <div className={styles.mainShopping}>
          <div className={styles.profil}>
            <MyProfile />
          </div>
          <div className={styles.myShopp}>
             <Typography variant='h2' weight="regularM">Мои покупки</Typography>
             <div className={styles.spopp}>
                <div className={styles.text}>
                <Typography variant="bodyL" weight="light">Дата</Typography>
                <Typography variant="bodyL" weight="light">Описание</Typography>
                <Typography variant="bodyL" weight="light">Цена</Typography>
                </div>
                <hr className={styles.hrText}/>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyShopping;
