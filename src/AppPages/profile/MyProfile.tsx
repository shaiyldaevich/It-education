"use client";
import styles from "./MyProfile.module.scss";
import img from "../../assets/user.png";
import Image from "next/image";
import { Typography } from "@/UI/Typography/Typography";
import Link from "next/link";
import PersonIcon from "@/assets/PersonIcon";
import WalletIcon from "@/assets/WalletIcon";
import CardIcon from "@/assets/CardIcon";
import CommentIcon from "@/assets/CommentIcon";
import BasketIcon from "@/assets/BasketIcon";
import LogOutIcon from "@/assets/LogOutIcon";

const MyProfile = () => {
  return (
     <div className={styles.mainProfile}>
      <div className="container">
        <div className={styles.profileCard}>
          <div className={styles.profileImg}>
            <Image src={img} alt="img" />
            <button type="submit">Добавить фото</button>
          </div>
          <div className={styles.profileText}>
            <div className={styles.person}>
              <PersonIcon />
              <Link href={"/personalData"}>
                <Typography variant="bodyL" weight="bold">
                  Личные данные
                </Typography>
              </Link>
            </div>
            <hr className={styles.hr} />
            <div className={styles.wallet}>
              <WalletIcon />
              <Link href={"/paymentCards"}>
              <Typography variant="bodyL" weight="bold">
                Платежные карты
              </Typography>
              </Link>
            </div>
            <hr className={styles.hr} />
            <div className={styles.card}>
              <CardIcon />
              <Link href={"/subscriptions"}>
              <Typography variant="bodyL" weight="bold">
                Подписки
              </Typography>
              </Link>
            </div>
            <hr className={styles.hr} />
            <div className={styles.comment}>
              <CommentIcon />
              <Link href={"/comments"}>
              <Typography variant="bodyL" weight="bold">
                Комментарии
              </Typography>
              </Link>
            </div>
            <hr className={styles.hr} />
            <div className={styles.basket}>
              <BasketIcon />
              <Link href={"/myShopping"}>
              <Typography variant="bodyL" weight="bold">
                Мои покупки
              </Typography>
              </Link>
            </div>
            <hr className={styles.hr} />
            <div className={styles.logout}>
              <LogOutIcon />
              <Typography variant="bodyL" weight="bold">
                Выйти
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
