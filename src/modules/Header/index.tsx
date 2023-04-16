import React from 'react';
import styles from "./styles.module.css";


const Header: React.FC = () => {
   return (
      <header className={styles.header}>
         <div className="container">
            <a href="/">Logo</a>
         </div>
      </header>
   );
}

export default Header;