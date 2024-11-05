import React from "react";
import scss from "./BuyInputs.module.scss";

const BuyInputs = () => {
    return (
        <section className={scss.BuyInputs}>
            <div className={scss.content}>
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
                <div className={scss.card}></div>
                <div className={scss.cardNumber}>
                    {" "}
                    <h1 className={scss.inputText}>Номер карты *</h1>
                    <input type="number" className={scss.input} />
                </div>
                <div className={scss.cardCode}></div>
                <div className={scss.actions}></div>
            </div>
        </section>
    );
};

export default BuyInputs;
