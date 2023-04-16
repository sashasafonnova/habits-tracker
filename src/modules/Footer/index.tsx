import React from 'react';
import styles from "./styles.module.css";


const Footer: React.FC = () => {
   return (
         <footer className={styles.footer}>
            <div className="container">
               <div>
                  <button className={styles.btn}>Сообщить о проблеме</button>
               </div>
            </div>
         </footer>
   );
}

export default Footer;