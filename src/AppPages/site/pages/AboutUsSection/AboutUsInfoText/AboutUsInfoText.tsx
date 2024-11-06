import React from "react";
import styles from "./AboutUsInfoText.module.scss";
import { Typography } from "@/UI/Typography/Typography";
import Image from "next/image";
import img1 from "../../../../../assets/aboutUa1.png";
import img2 from "../../../../../assets/aboutUa2.png";
import img3 from "../../../../../assets/sertificat.png";
import Link from "next/link";

const AboutUsInfoText = () => {
  const aboutUs = [
    {
      name: "О нас",
      descr1:
        "Курсы IT-профессий Motion Web была основана в 2021-ом году в Бишкеке с целью дать возможность каждому человеку, даже без опыта в технологиях, гарантированно освоить IT-профессию.",
      descr2:
        "Форма обучения - онлайн, с применением электронного обучения и дистанционных образовательных технологий  на образовательной платформе Moodle и прямые эфиры с преподавателем. 154 академических часа трудоёмкости учебной деятельности отведено практическим занятиям и выполнению практических заданий.",

      img1: img1,
      img2: img2,
    },
  ];

  const aboutUs2 = [
    {
      name: "Сертификат",
      descr: "По окончании обучения выдается онлайн сертификат.",
      img3: img3,
    },
  ];

  return (
    <div className={styles.InfoAboutus}>
      <div className="container">
        <div className={styles.mainInfo}>
          <div className={styles.breatcrums}>
            <Typography variant="bodyL" weight="light">
              <span>
                <Link href={"/"}>Главная</Link>
              </span>
              / О нас
            </Typography>
          </div>
          <div className={styles.mainTextInfo}>
            {aboutUs.map((el, index) => (
              <div key={index}>
                <Typography variant="h2" weight="regularM">
                  {el.name}
                </Typography>
                <div className={styles.descr}>
                  <Typography variant="bodyL" weight="bold">
                    {el.descr1}
                  </Typography>
                  <Typography variant="bodyL" weight="bold">
                    {el.descr2}
                  </Typography>
                </div>
                <div className={styles.textImg}>
                  <Image src={img1} alt="img" />
                  <Image src={img2} alt="img" />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.mainSertificat}>
            {aboutUs2.map((el, index) => (
              <div key={index}>
                <Typography variant="h2" weight="regularM">
                  {el.name}
                </Typography>
                <Typography variant="bodyL" weight="bold">
                  {el.descr}
                </Typography>
                <div className={styles.imgSer}>
                  <Image src={img3} alt="img" />
                </div>
              </div>
            ))}
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default AboutUsInfoText;
