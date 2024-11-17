"use client";

import React, { useState } from "react";
import scss from "./SignUpPage.module.scss";
import Image from "next/image";
import logo from "../../../../assets/логотип.png";
import eye from "../../../../assets/eye.png";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Link from "next/link";
const SignUpPage = () => {
    const { t } = useLanguageStore();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <section className={scss.SignUpPage}>
            <div className={scss.content}>
                <Image
                    quality={100}
                    className={scss.logo}
                    src={logo}
                    alt="logo"
                />
                <div className={scss.forum}>
                    {" "}
                    <div className={scss.inputBlock}>
                        <h1 className={scss.text}>E mail*</h1>
                        <input type="email" className={scss.input} />
                    </div>
                    <div className={scss.inputBlock}>
                        <h1 className={scss.text}>Пароль*</h1>
                        <div className={scss.passwordInput}>
                            <input
                                className={scss.editedInput}
                                type={showPassword ? "text" : "password"}
                            />
                            <button
                                className={scss.passButton}
                                onClick={togglePasswordVisibility}
                            >
                                <Image
                                    className={scss.hideButton}
                                    src={eye}
                                    alt="eye"
                                />
                            </button>
                        </div>{" "}
                    </div>
                    <div className={scss.buttons}>
                        <div className={scss.actions}>
                            <Link href={"/HomePage"} className={scss.button}>
                                {" "}
                                {t("Кирүү", "Войти")}
                            </Link>
                            <h1 className={scss.buttonText}>
                                {t("Паролду унуттуңузбу?", "Забыли пароль?")}
                            </h1>
                        </div>
                        <Link className={scss.create} href={"/auth/SignInPage"}>
                            {t(
                                "Сиздин аккаунтыңыз жокпу?",
                                "У вас нет аккаунта?"
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;
