import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";

import { useAppSelector } from '../../../../hooks/redux-hooks';
import { userDataSelector } from '../../../../redux/slices/authSlice';

import { Menu } from '../Menu';

import logoSVG from './icons/logo.svg';
import settingsSVG from './icons/settings.svg';



export const HeaderContainer: React.FC = () => {


   const userData = useAppSelector(userDataSelector);
   const [menuOpen, setMenuOpen] = React.useState(false);


   return (
      <>
      <header className={styles.header}>
         <div className="container">
            <div className={styles.content}>
               <Link to={userData ? '/account' : '/'}>
                  <img src={logoSVG} alt="Logo" />
               </Link>
                  {userData && (
                        <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
                           <span className={styles.menuText}>Мой аккаунт</span>
                           <img src={settingsSVG} className={styles.settingsIcon} alt="settings" />
                        </button>
                  )}
            </div>
         </div>
      </header>
         {menuOpen && userData && <Menu setMenuOpen={setMenuOpen} data={userData}/>}
      </>
   );
}
