import React from 'react';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';


export const AddHabitBtn: React.FC = () => {
   return (
      <div className={styles.container}>
         <Link to='/create' className={styles.link}>
            <span className={styles.icon}>+</span>
            <span className={styles.text}>Создать трек</span>
            
         </Link>
      </div>
   );
}
