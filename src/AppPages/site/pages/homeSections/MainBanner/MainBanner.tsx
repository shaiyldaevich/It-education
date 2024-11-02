import React from "react";
import scss from "./MainBanner.module.scss";
import banner from "../../../../../assets/men 1.png";
import Image from "next/image";

const MainBanner = () => {
    return (
        <section className={scss.MainBanner}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.info}>
                        <h1 className={scss.title}>
                            IT образовательная платформа{" "}
                        </h1>
                        <h1 className={scss.text}>
                            Наша образовательная платформа вам даст необходимые
                            практические знания для адаптации в IT-сфере.
                        </h1>
                    </div>
                    <Image
                        className={scss.bannerIMG}
                        src={banner}
                        alt="banner"
                    />
                </div>
            </div>
        </section>
    );
};

export default MainBanner;
