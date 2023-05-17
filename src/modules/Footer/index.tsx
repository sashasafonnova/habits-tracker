import React from 'react';
import styles from "./styles.module.css";


interface FooterProps {
   setModalNeedOpen: (openModal: boolean) => void
}


const Footer: React.FC<FooterProps> = ( {setModalNeedOpen} ) => {
   return (
         <footer className={styles.footer}>
            <div className="container">
               <div>
                  <button className={styles.btn} onClick={() => setModalNeedOpen(true)}>Сообщить о проблеме</button>
               <p className={styles.copyrigth}>© HabitsTracker, 2023</p>
               </div>
            </div>
         </footer>
   );
}

export default Footer;