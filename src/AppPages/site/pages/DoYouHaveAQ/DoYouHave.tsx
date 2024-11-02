"use client";
import React, { useState } from "react";
import scss from "./DoYouHave.module.scss";
import Image from "next/image";
import Question from "../../../../assets/image 9.svg";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionItem {
  question: string;
  answer: string;
}

const DoYouHave: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useLanguageStore(); // Тилди колдонуу үчүн функция

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData: AccordionItem[] = [
    {
      question: t(
        "Программалоодогу резервдик сөздөр деген эмне?",
        "Что такое зарезервированные слова в программировании?"
      ),
      answer: t(
        "Резервдик же ачкыч сөздөр - бул алдын ала белгиленген маанилери бар жана код жазууда башка максаттарда, мисалы, өзгөрмөлөрдү аталышында колдонулбай турган сөздөр жана билдирүүлөр. Программалоо тилдеринде кеңири таралган ачкыч сөздөргө if/then/else сыяктуу конструкциялар же for жана while сыяктуу ар кандай цикл конструкциялары кирет.",
        "Зарезервированные или ключевые слова – это слова и выражения, которые имеют предопределенные значения и не могут использоваться при написании кода для иных целей, например, для именования переменных. Примеры распространенных ключевых слов в языках программирования – это конструкции if/then/else или различные варианты циклов. Вроде for и while."
      ),
    },
    {
      question: t(
        "Мен жазылууну автоматтык жаңыртуудан баш тарта аламбы?",
        "Могу ли я отказаться от автопродления подписки?"
      ),
      answer: t(
        "Ооба, сиз жазылууну автоматтык түрдө жаңыртуудан каалаган убакта баш тартсаңыз болот.",
        "Да, вы можете отказаться от автопродления подписки в любое время."
      ),
    },
    {
      question: t(
        "Мен акчаны кайтарып ала аламбы?",
        "Могу ли я вернуть деньги?"
      ),
      answer: t(
        "Акча кайтаруу саясаты сиздин жазылууңуздун шарттарына көз каранды.",
        "Политика возврата средств зависит от условий вашей подписки."
      ),
    },
    {
      question: t(
        "IT тармагындагы эң актуалдуу багыттар кайсылар?",
        "Какие направления в IT самые актуальные?"
      ),
      answer: t("Төртүнчү суроого жооп.", "Ответ на четвертый вопрос."),
    },
    {
      question: t(
        "C++ тилин үйрөнбөстөн мурда башка программалоо тилин үйрөнүү керекпи?",
        "Нужно ли учить другой язык программирования, перед изучением языка C++?"
      ),
      answer: t("Бешинчи суроого жооп.", "Ответ на пятый вопрос."),
    },
    {
      question: t("Платформа жаңыртылуудабы?", "Платформа обновляется?"),
      answer: t("Алтынчы суроого жооп.", "Ответ на шестой вопрос."),
    },
    {
      question: t(
        "Бардык курстарга кандайча кирүүгө болот?",
        "Как я могу получить доступ ко всем курсам?"
      ),
      answer: t("Жетинчи суроого жооп.", "Ответ на седьмой вопрос."),
    },
  ];

  const questionKyrgyz = t("Суроолор <br> калдыбы?", "Остались <br> вопросы?");
  const questionParts = questionKyrgyz.split("<br>");

  return (
    <section className={scss.DoYouHave}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <h1>
              {questionParts.map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < questionParts.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <Image src={Question} alt="img" width={170} height={170} />
          </div>
          <div className={scss.accordion}>
            {accordionData.map((item, index) => (
              <div key={index} className={scss.accordionItem}>
                <button
                  className={scss.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <span className={scss.icon}>
                    {activeIndex === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </button>
                <div
                  className={`${scss.accordionContent} ${
                    activeIndex === index ? scss.open : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoYouHave;
