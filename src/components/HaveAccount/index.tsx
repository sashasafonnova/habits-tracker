import React from 'react';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';


interface HaveAccountProps {
   text: string,
   action: string,
   path: string
}


const HaveAccount: React.FC<HaveAccountProps> = ( {text, action, path} ) => {
   return (
      <div className={styles.content}>
         <span className={styles.title}>{text}</span>
         <Link to={path} className={styles.btn}>{action}</Link>
      </div>
   );
}


export default HaveAccount;
