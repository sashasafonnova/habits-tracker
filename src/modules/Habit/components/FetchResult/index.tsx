import React from 'react';
import styles from "./styles.module.css";
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { fetchMessageSelector, fetchStatusSelector } from '../../../../redux/slices/habitsSlice';
import { Link } from 'react-router-dom';



export const FetchResult: React.FC = () => {

   const fetchMessage = useAppSelector(fetchMessageSelector);
   const fetchStatus = useAppSelector(fetchStatusSelector);


   return (
      <div className={styles.window}>
         {fetchStatus === 'loading' && (
            <div className={styles.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
         )}
         <p className={styles.text}>{fetchMessage ? fetchMessage : 'Удаляем трек...'}</p>
         {fetchStatus !== 'loading' && (
            <Link to='/habits' className={styles.btn}>Вернуться к списку</Link>
         )}
      </div>
   );
}
