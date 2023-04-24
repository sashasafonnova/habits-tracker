import React from 'react';
import styles from "./styles.module.css";
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { Menu } from '../Menu';
import { Link } from 'react-router-dom';

import logoSVG from './icons/logo.svg';
import settingsSVG from './icons/settings.svg';


export const HeaderContainer: React.FC = () => {


   const isAuth = useAppSelector(state => state.authSlice.isAuth);
   const [menuOpen, setMenuOpen] = React.useState(false);


   return (
      <>
      <header className={styles.header}>
         <div className="container">
            <div className={styles.content}>
               <Link to="/">
                  <img src={logoSVG} alt="Logo" />
               </Link>
                  {isAuth && (
                        <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
                           <span className={styles.menuText}>Мой аккаунт</span>
                           <img src={settingsSVG} className={styles.settingsIcon} alt="settings" />
                        </button>
                  )}
            </div>
         </div>
      </header>
      {menuOpen && <Menu setMenuOpen={setMenuOpen}/>}
      </>
   );
}
