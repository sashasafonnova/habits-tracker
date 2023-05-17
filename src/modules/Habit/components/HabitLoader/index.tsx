import React from 'react';
import styles from "./styles.module.css";


export const HabitLoader: React.FC = () => {


   return (
      <div className={styles.block}>
         <div className={styles.info}>
            <div className={styles.category}>
               <div className={styles.categoryIcon}></div>
               <div className={styles.categoryText}></div>
            </div>
            <div className={styles.title}></div>
            <div className={styles.start}></div>
            <div className={styles.progress}></div>  
            <div className={styles.progressTrek}>
               {[...new Array(60)].map((item, index) => (
                  <div className={styles.progressIcon} key={index}></div>
               ))
               }
            </div>
            <div className={styles.btnCheck}></div>
            <div className={styles.lastCheckTitle}></div>
            <div className={styles.lastCheck}></div>
         </div>
      </div>
   );
}