"use client";
import React from "react";
import styles from "./ShoolSlider.module.scss";
import { Typography } from "@/UI/Typography/Typography";
import img1 from "../../../../../assets/slider1.png";
import img2 from "../../../../../assets/slider2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import Image from "next/image";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ShoolSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    rtl: true,
    arrows: false,
  };

  const cardText = [
    {
      img: img1,
      name: "Виктор Александарович",
      descr:
        "Лучшая школа в галактике и место, где я полюбил мир IT !!! Я вот-вот стану выпускником Motion Web.  За это время мне дали фундаментальные знания программирования ( C++, C#, Python ), дискретной математики, криптографии, созданию сайтов со сложной серверной архитектурой и многим другим важным навыкам. ",
      date: "23.02.2022 г",
    },
    {
      img: img2,
      name: "Алина Татьянован",
      descr:
        "Лучшая школа в галактике и место, где я полюбил мир IT !!! Я вот-вот стану выпускником Motion Web.  За это время мне дали фундаментальные знания программирования ( C++, C#, Python ), дискретной математики, криптографии, созданию сайтов со сложной серверной архитектурой и многим другим важным навыкам. ",
      date: "23.02.2022 г",
    },
    {
      img: img1,
      name: "Виктор Александарович",
      descr:
        "Лучшая школа в галактике и место, где я полюбил мир IT !!! Я вот-вот стану выпускником Motion Web.  За это время мне дали фундаментальные знания программирования ( C++, C#, Python ), дискретной математики, криптографии, созданию сайтов со сложной серверной архитектурой и многим другим важным навыкам. ",
      date: "23.02.2022 г",
    },
    {
      img: img2,
      name: "Алина Татьянован",
      descr:
        "Лучшая школа в галактике и место, где я полюбил мир IT !!! Я вот-вот стану выпускником Motion Web.  За это время мне дали фундаментальные знания программирования ( C++, C#, Python ), дискретной математики, криптографии, созданию сайтов со сложной серверной архитектурой и многим другим важным навыкам. ",
      date: "23.02.2022 г",
    },
  ];

  return (
    <section className={styles.mainSlider}>
      <div className="container">
        <div className={styles.slider}>
          <Typography variant="h2" weight="regularM">
            Отзывы о нашей школе
          </Typography>
          <div className={styles.sliderBox}>
            <Slider {...settings}>
              {cardText.map((el, index) => (
                <div className={styles.card} key={index}>
                  <div className={styles.img}>
                    <Image src={el.img} alt="img" />
                  </div>
                  <div className={styles.text}>
                    <Typography
                      className={styles.name}
                      variant="bodyXL"
                      weight="regular"
                    >
                      {el.name}
                    </Typography>
                    <Typography
                      className={styles.descr}
                      variant="bodyS"
                      weight="bold"
                    >
                      {el.descr}
                    </Typography>
                  </div>
                  <div className={styles.date}>
                    <Typography variant="bodyL" weight="regular">
                      {el.date}
                    </Typography>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoolSlider;
