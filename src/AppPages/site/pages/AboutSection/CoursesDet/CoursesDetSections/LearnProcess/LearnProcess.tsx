"ise client";

import React from "react";
import scss from "./LearnProcess.module.scss";
import img1 from "../../../../../../../assets/block1.png";
import img2 from "../../../../../../../assets/block2.png";
import img3 from "../../../../../../../assets/block3.png";
import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

const LearnProcess = () => {
    const { t } = useLanguageStore();

    return (
        <section className={scss.LearnProcess}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.block}>
                        <Image
                            className={scss.blockIMG}
                            src={img1}
                            alt="photo"
                        />
                        <h1 className={scss.title}>
                            {t("100 материалдар", "100 материалов")}
                        </h1>
                        <h1 className={scss.text}>
                            {t(
                                "Тек пайдалуу маалыматтар, эч кандай ашыкча сөздөр. Бул билимдерди биринчи болуп колдонуп көрүңүз",
                                "Только полезная информация, никакой воды. Применяйте эти знания первыми!"
                            )}
                        </h1>
                    </div>
                    <div className={scss.block}>
                        <Image
                            className={scss.blockIMG}
                            src={img2}
                            alt="photo"
                        />
                        <h1 className={scss.title}>
                            {t("100% эксклюзивдүү", "100% эксклюзив")}
                        </h1>{" "}
                        <h1 className={scss.text}>
                            {t(
                                "Курс биздин платформа үчүн эксклюзивдүү түрдө жазылган",
                                "Курс записан эксклюзивно для нашей платформы"
                            )}
                        </h1>
                    </div>
                    <div className={scss.block}>
                        <Image
                            className={scss.blockIMG}
                            src={img3}
                            alt="photo"
                        />
                        <h1 className={scss.title}>
                            {t(
                                "Ар кандай учурда, каалаган жерде.",
                                "В любое время, в любом месте"
                            )}
                        </h1>
                        <h1 className={scss.text}>
                            {t(
                                "Өзүңүзгө ы1гайлуу учурда жана каалаган жерде, мобилдик телефонуңузда же компьютериңизде иштеңиз",
                                "Занимайтесь как вам удобно и где угодно, на своем мобильном или компьютере"
                            )}{" "}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnProcess;
