import React from "react";
import scss from "./AboutSchool.module.scss";
import banner from "../../../../assets/AboutSchoolPNG.png";
import Image from "next/image";
import Link from "next/link";

const AboutSchool = () => {
    return (
        <section className={scss.AboutSchool}>
            <div className="container">
                <div className={scss.path}>
                    <Link className={scss.homeNav} href={"/"}>
                        Главная
                    </Link>
                    /
                    <Link className={scss.nav} href={"/AboutSchool"}>
                        О школе
                    </Link>
                </div>
                <div className={scss.content}>
                    <div className={scss.info}>
                        <div className={scss.about}>
                            <h1 className={scss.title}>О нашей школе:</h1>
                            <h1 className={scss.text}>
                                Наша платформа — это интенсивная программа
                                обучения для тех, кто хочет освоить
                                востребованную профессию, войти в IT и
                                зарабатывать больше.
                            </h1>
                        </div>
                        <div className={scss.tasks}>
                            <h1 className={scss.title}>Наша миссия:</h1>
                            <h1 className={scss.text}>
                                Сформировать интерес к современным технологиям и
                                помочь школьнику определиться с выбором будущей
                                специальности.
                            </h1>
                        </div>
                    </div>
                    <div className={scss.banner}>
                        <Image
                            className={scss.bannerIMG}
                            src={banner}
                            alt="banner"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSchool;
