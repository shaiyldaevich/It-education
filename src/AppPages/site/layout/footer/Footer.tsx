"use client";

import scss from "./Footer.module.scss";
import logo from "../../../../assets/логотип.png";
import instagram from "../../../../assets/InstagramLogo.png";
import youtube from "../../../../assets/YoutubeLogo.png";
import facebook from "../../../../assets/FacebookLogo.png";
import twitter from "../../../../assets/Vector.png";
import tiktok from "../../../../assets/TiktokLogo.png";
import telegram from "../../../../assets/TelegramLogo.png";
import gmail from "../../../../assets/Envelope.png";
import contacts from "../../../../assets/Phone.png";
import mapPin from "../../../../assets/MapPin.png";
import Image from "next/image";
import Link from "next/link";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Footer = () => {
    const { t, setLanguage, language } = useLanguageStore();

    const handleLanguageChange = (selectedLanguage: "ky" | "ru") => {
        setLanguage(selectedLanguage);
    };

    return (
        <footer className={scss.Footer}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.logoBlock}>
                        <Image src={logo} alt="logo" />
                        <div className={scss.translateButtons}>
                            <button
                                onClick={() => handleLanguageChange("ky")}
                                className={`${scss.buttonKG} ${
                                    language === "ky" ? scss.active : ""
                                }`}
                            >
                                KG
                            </button>
                            <button
                                onClick={() => handleLanguageChange("ru")}
                                className={`${scss.buttonRU} ${
                                    language === "ru" ? scss.active : ""
                                }`}
                            >
                                RU
                            </button>
                        </div>
                    </div>
                    <div className={scss.navsBlock}>
                        <h1 className={scss.navsTitle}>
                            {t("Быстрые ссылки", "Тез байланыштар")}
                        </h1>
                        <div className={scss.navs}>
                            <Link href={"#"} className={scss.nav}>
                                {t("О школе", "Мектеп жөнүндө")}
                            </Link>
                            <Link href={"#"} className={scss.nav}>
                                {t("Наши курсы", "Биздин курстар")}
                            </Link>
                            <Link href={"#"} className={scss.nav}>
                                {t("О нас", "Биз жөнүндө")}
                            </Link>
                        </div>
                    </div>
                    <div className={scss.socialMedia}>
                        <h1 className={scss.socialMediaTitle}>
                            {t("Социальные сети", "Социалдык тармактар")}
                        </h1>
                        <div className={scss.socialMediaLinks}>
                            <Link className={scss.socialMediaLink} href={"#"}>
                                <Image
                                    className={scss.socialMediaLink}
                                    src={tiktok}
                                    alt="tt"
                                />
                            </Link>
                            <Link href={"#"}>
                                <Image
                                    className={scss.socialMediaLink}
                                    src={telegram}
                                    alt="tg"
                                />
                            </Link>
                            <Link href={"#"}>
                                <Image
                                    className={scss.socialMediaLink}
                                    src={twitter}
                                    alt="twter"
                                />
                            </Link>
                            <Link href={"#"}>
                                <Image
                                    className={scss.socialMediaLink}
                                    src={facebook}
                                    alt="fbook"
                                />
                            </Link>
                            <Link href={"#"}>
                                <Image
                                    className={scss.socialMediaLink}
                                    src={youtube}
                                    alt="ytube"
                                />
                            </Link>
                            <Link href={"#"}>
                                <Image
                                    className={scss.socialMediaLink}
                                    src={instagram}
                                    alt="insta"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={scss.contacts}>
                        <h1 className={scss.contactsTitle}>
                            {t("Контакты", "Байланыштар")}
                        </h1>
                        <div className={scss.contactsInfo}>
                            <h1 className={scss.info}>
                                <Image
                                    className={scss.gmailIcon}
                                    src={gmail}
                                    alt="gmail"
                                />
                                @motionwebteam@gmail.com
                            </h1>
                            <h1 className={scss.info}>
                                <Image
                                    className={scss.phoneIcon}
                                    src={contacts}
                                    alt="phone"
                                />
                                +996 559 - 69 - 26 - 26
                            </h1>
                        </div>
                    </div>
                    <div className={scss.address}>
                        <h1 className={scss.addressTitle}>
                            {t("Адреса", "Даректер")}
                        </h1>
                        <div className={scss.addresses}>
                            <h1 className={scss.info}>
                                <Image src={mapPin} alt="mapPin" />
                                Турусбекова 109 / 3
                            </h1>
                            <h1 className={scss.info}>
                                Идентификационный код: 1234567890
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
