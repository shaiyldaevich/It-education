import React from "react";
import scss from "./LearnProcess.module.scss";
import img1 from "../../../../../../../assets/block1.png";
import img2 from "../../../../../../../assets/block2.png";
import img3 from "../../../../../../../assets/block3.png";
import Image from "next/image";

const LearnProcess = () => {
    return (
        <section className={scss.LearnProcess}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.block}>
                        <Image src={img1} alt="photo" />
                        <h1 className={scss.title}>100 материалов</h1>
                        <h1 className={scss.text}>
                            Только полезная информация, никакой воды. Применяйте
                            эти знания первыми!
                        </h1>
                    </div>
                    <div className={scss.block}>
                        <Image src={img2} alt="photo" />
                        <h1 className={scss.title}>100% эксклюзив</h1>{" "}
                        <h1 className={scss.text}>
                            Курс записан эксклюзивно для нашей платформы
                        </h1>
                    </div>
                    <div className={scss.block}>
                        <Image src={img3} alt="photo" />
                        <h1 className={scss.title}>
                            В любое время, в любом месте
                        </h1>
                        <h1 className={scss.text}>
                            Занимайтесь как вам удобно и где угодно, на своем
                            мобильном или компьютере{" "}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnProcess;
