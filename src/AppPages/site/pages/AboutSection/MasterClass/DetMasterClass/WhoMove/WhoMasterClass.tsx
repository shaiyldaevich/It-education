import React from "react";
import scss from "./WhoMasterClass.module.scss";
import Image from "next/image";
import Master from "@/assets/master.svg";

const WhoMasterClass = () => {
  return (
    <div className={scss.WhoMasterClass}>
      <div className="container">
        <div className={scss.content}>
          <Image src={Master} alt="master" />
          <h3>Мастер класс ведет</h3>
          <h1>Евгений Александрович</h1>
          <h4> Frontend developer / Аратор </h4>
        </div>
      </div>
    </div>
  );
};

export default WhoMasterClass;
