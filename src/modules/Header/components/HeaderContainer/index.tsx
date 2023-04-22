import React from 'react';
import styles from "./styles.module.css";
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { Menu } from '../Menu';


export const HeaderContainer: React.FC = () => {


   const isAuth = useAppSelector(state => state.authSlice.isAuth);
   const [menuOpen, setMenuOpen] = React.useState(false);


   return (
      <>
      <header className={styles.header}>
         <div className="container">
            <div className={styles.content}>
               <a href="/">Logo</a>
                  {isAuth && <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>Мой аккаунт</button>}
            </div>
         </div>
      </header>
      {menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
      </>
   );
}
