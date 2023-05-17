import React from 'react';
import styles from "./styles.module.css";

import { Link } from 'react-router-dom';



type FetchErrorMesProps = {
   message: string | null,
}


export const FetchErrorMes: React.FC<FetchErrorMesProps> = ({message}) => {


   return (
      <div className={styles.window}>
         <p className={styles.text}>{message ? message : 'Не удалось получить треки'}</p>
         <Link to='/habits' className={styles.btn}>Вернуться к списку</Link>
      </div>
   );
}



