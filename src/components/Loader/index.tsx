import React from 'react';
import styles from "./styles.module.css";


export const Loader: React.FC = () => {

   return (
      <div className={styles.loader}>  
         <div className={styles.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
         </div>
      </div>
   );
}