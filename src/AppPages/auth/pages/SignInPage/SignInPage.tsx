"use client";

import React from "react";
import scss from "./SignInPage.module.scss";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useRouter } from "next/navigation";

const SignInPage = () => {
    const { t } = useLanguageStore();

    const nav = useRouter();

    const handleSignIn = () => {
        nav.push("/HomePage");
    };

    return (
        <section className={scss.SignInPage}>
            <div className="container">
                <div className={scss.content}>
                    <div className={scss.forum}>
                        <div className={scss.nameInput}>
                            <h1 className={scss.inputText}>Ф.И.О*</h1>
                            <input type="text" className={scss.input} />
                        </div>
                        <div className={scss.numberInput}>
                            {" "}
                            <h1 className={scss.inputText}>Телефон*</h1>
                            <div className={scss.inputBlock}>
                                <h1 className={scss.inputBlockText}>+996</h1>
                                <input type="number" className={scss.input} />
                            </div>
                        </div>
                        <div className={scss.emailInput}>
                            {" "}
                            <h1 className={scss.inputText}>E mail*</h1>
                            <input type="email" className={scss.input} />
                        </div>

                        <div className={scss.actions}>
                            <div className={scss.buttons}>
                                <button
                                    className={scss.button}
                                    onClick={handleSignIn}
                                >
                                    {t("Катталуу", "Зарегистрироватся")}
                                </button>
                                <button
                                    className={scss.buttonSec}
                                    onClick={handleSignIn}
                                >
                                    {t(
                                        "Сиздин аккаунтыңыз барбы?",
                                        "у вас уже есть аккаунт?"
                                    )}
                                </button>
                            </div>
                            <div className={scss.checkBox}>
                                <input
                                    type="checkbox"
                                    id="checkbox3"
                                    className={scss.customCheckbox}
                                />
                                <label htmlFor="checkbox3"></label>{" "}
                                <h1 className={scss.text}>
                                    {t(
                                        "Мен кызмат көрсөтүү шарттары менен тааныштым жана макулмун",
                                        "Я ознакомился и согласен с Условиями оказания услуг "
                                    )}
                                </h1>
                            </div>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignInPage;
