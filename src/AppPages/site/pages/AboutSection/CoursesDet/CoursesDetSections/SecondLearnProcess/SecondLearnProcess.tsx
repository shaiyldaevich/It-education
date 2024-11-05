import React from "react";
import scss from "./SecondLearnProcess.module.scss";

const SecondLearnProcess = () => {
    return (
        <section className={scss.SecondLearnProcess}>
            <div className="container">
                <div className={scss.content}>
                    <h1 className={scss.title}>Процесс обучения</h1>
                    <div className={scss.blocks}>
                        <div className={scss.block}>
                            <h1 className={scss.number}>1</h1>
                            <h1 className={scss.blockTitle}>Мастер-класс</h1>
                            <h1 className={scss.text}>
                                Вы получите доступ ко всем урокам мастер-класса
                                и другим дополнительным материалам
                            </h1>
                        </div>
                        <div className={scss.block}>
                            <h1 className={scss.number}>2</h1>
                            <h1 className={scss.blockTitle}>Своё расписание</h1>
                            <h1 className={scss.text}>
                                Доступ к мастер-классам открыт 24/7. Вы сами
                                решаете, когда у вас следующий урок
                            </h1>
                        </div>
                        <div className={scss.block}>
                            <h1 className={scss.number}>3</h1>
                            <h1 className={scss.blockTitle}>Сообщество</h1>
                            <h1 className={scss.text}>
                                Вы сможете общаться и обмениваться мнениями с
                                другими учениками в комментариях
                            </h1>
                        </div>
                        <div className={scss.block}>
                            <h1 className={scss.number}>4</h1>
                            <h1 className={scss.blockTitle}>Доступ</h1>
                            <h1 className={scss.text}>
                                Мы предоставляем вам бессрочный доступ к
                                материалам любого оплаченного мастер-класса
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondLearnProcess;
