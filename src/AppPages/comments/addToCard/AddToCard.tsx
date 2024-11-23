import React from 'react';
import styles from "./AddToCard.module.scss"
import { Typography } from '@/UI/Typography/Typography';

const AddToCard = () => {
    return (
        <div className={styles.card}>
          <div className={styles.text1}>
            <Typography variant='h2' weight='bold'>Добавить карту</Typography>
            <Typography variant='bodyL' weight='light'>Добавьте свою карту, чтобы больше не тратить время на ввод данных вручнуДобавьте свою карту, чтобы больше не тратить время на ввод данных вручну</Typography>
          </div>
          <div className={styles.text2}>
            <button type='submit'>Добавить карту</button>
            <Typography variant='bodyL' weight='light'>Для проверки карты будет снята минимальная сумма в размере 1$.  Сумма будет возвращена вам а течении 48 часов</Typography>
          </div>
        </div>
    );
};

export default AddToCard;