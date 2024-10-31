import Image from "next/image";
import scss from "./Footer.module.scss";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "../../../../assets/логотип.svg";
const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Image src={logo} alt="Logo" />
            <div className={scss.languageSwitch}>
              <button>KG</button>
              <button>RU</button>
            </div>
          </div>

          <div className={scss.links}>
            <h4>Быстрые ссылки</h4>
            <a href="/">О школе</a>
            <a href="/">Наши курсы</a>
            <a href="/">О нас</a>
          </div>

          <div className={scss.socials}>
            <h4>Социальные сети</h4>
            <div className={scss.socialIcons}>
              <FaInstagram />
              <FaYoutube />
              <FaFacebook /> <br />
              <FaTwitter />
              <FaTiktok />
              <FaTelegramPlane />
            </div>
          </div>

          <div className={scss.contacts}>
            <h4>Контакты</h4>
            <div className={scss.email}>
              <MdEmail />
              <span>@motionwebteam@gmail.com</span>
            </div>
            <div className={scss.phone}>
              <MdPhone />
              <span>+996 559 - 69 - 26 - 26</span>
            </div>
          </div>

          <div className={scss.address}>
            <h4>Адреса</h4>
            <div className={scss.location}>
              <MdLocationOn />
              <span>Турусбекова 109 / 3</span>
            </div>
            <div className={scss.code}>
              <span>
                Идентификационный <br /> код: 1234567890
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
