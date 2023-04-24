import React from 'react';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';



interface MenuProps {
   setMenuOpen: (menuOpen: boolean) => void;
}


export const Menu: React.FC<MenuProps> = ({ setMenuOpen } ) => {



   return (
      <section className={styles.section} onClick={() => setMenuOpen(false)} >
         <div className={styles.content} onClick={(event) => event.stopPropagation()}>
            <button className={styles.closeMenu} onClick={() => setMenuOpen(false)}>X</button>
            <div className={styles.userData}> 
               <p className={styles.userName}>Анастасия</p>
               <p className={styles.userEmail}>test@test.ru</p>
            </div>
            <nav className={styles.nav}>
               <ul className={styles.actions}>

                  <li className={styles.action} onClick={() => setMenuOpen(false)}>
                     <Link to='./create' className={styles.link}>Создать привычку</Link>
                  </li>
                  <li className={styles.action} onClick={() => setMenuOpen(false)}>
                     <Link to='/my-habits' className={styles.link}>Мои треки</Link>
                  </li>
               </ul>
               <div className={styles.logOut}>
                  <button className={styles.logOutBtn}>Выйти</button>
               </div>
            </nav>
         </div>
      </section>
   );
}