import React from 'react';
import styles from "./styles.module.css";
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { fetchMessageSelector, fetchStatusSelector } from '../../../../redux/slices/habitsSlice';
import { Link } from 'react-router-dom';
import { LoaderSpinner } from '../../../../components/LoaderSpinner';



interface WindowResultProps {
   setFormSend: (status: boolean) => void
}


export const FetchResult: React.FC<WindowResultProps> = ({ setFormSend }) => {

   const fetchMessage = useAppSelector(fetchMessageSelector);
   const fetchStatus = useAppSelector(fetchStatusSelector);


   return (
      <div className={styles.window}>
         {fetchStatus === 'loading' && <LoaderSpinner/>}
         <p className={styles.text}>{fetchMessage ? fetchMessage : 'Создаем трек...'}</p>  
         {fetchStatus !== 'loading' && (
            <div className={styles.btns}>
               <button className={styles.btn} onClick={() => setFormSend(false)}>
                  <span className={styles.icon}>+</span>
                  <span className={styles.text}>Создать еще</span>
               </button>
               <Link to='/habits' className={styles.btnBack}>Вернуться к списку</Link>
            </div>
         )}
      </div>
   );
}
