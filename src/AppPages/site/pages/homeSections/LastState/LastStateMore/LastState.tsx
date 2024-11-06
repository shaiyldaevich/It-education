"use client";
import scss from "./Last.module.scss";
import LastImg from "../../../../../../assets/Rectangle 2061 (2).svg";
import Image from "next/image";
import { CgNotes } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Link from "next/link";

const Last = [
  {
    img: LastImg,
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
    date: "01.02.2022",
  },
  {
    img: LastImg,
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
    date: "01.02.2022",
  },
  {
    img: LastImg,
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
    date: "01.02.2022",
  },
  {
    img: LastImg,
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
    date: "01.02.2022",
  },
  {
    img: LastImg,
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
    date: "01.02.2022",
  },
  {
    img: LastImg,
    title: "Статьи",
    description:
      "Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
    date: "01.02.2022",
  },
];

const LastStatesMore = () => {
  const nav = useRouter();
  const { t } = useLanguageStore();

  return (
    <section className={scss.LastStates}>
      <div className="container">
        <Link className={scss.homeNav} href={"/"}>
          {t("Башкы /", "Главная /")}
        </Link>

        <Link className={scss.nav} href={"/article"}>
          {t("Макалалар", "Статьи")}
        </Link>
        <div className={scss.content}>
          <div className={scss.logoTitle}>
            <h1>{t("Акыркы макалалар", "Последние статьи")}</h1>
          </div>
          <div className={scss.cards}>
            {Last.map((item, index) => (
              <div className={scss.card} key={index}>
                <Image src={item.img} alt={item.title} />
                <div className={scss.card_title}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div className={scss.buttons}>
                  <button
                    onClick={() =>
                      nav.push(`/article/${item.description.slice(0, 20)}`)
                    }
                  >
                    <span>
                      <CgNotes />
                    </span>
                    {t("окуу", "читать")}
                  </button>
                  <h3>{item.date}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastStatesMore;
