import React from 'react';
import styles from "./styles.module.css";


const Footer: React.FC = () => {
   return (
         <footer className={styles.footer}>
            <div className="container">
               <div>
                  <button className={styles.btn}>Сообщить о проблеме</button>
               <p className={styles.copyrigth}>© HabitsTracker, 2023</p>
               </div>
            </div>
         </footer>
   );
}

export default Footer;