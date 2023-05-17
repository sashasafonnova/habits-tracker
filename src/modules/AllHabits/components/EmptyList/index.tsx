import React from 'react';
import styles from "./styles.module.css";


const EmptyList: React.FC = () => {
   return (
      <div className={styles.block}>
         <h2 className={styles.title}>У вас пока нет ни одного трека</h2>
      </div>
   );
}

export default EmptyList;