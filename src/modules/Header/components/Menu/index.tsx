import React from 'react';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import { UserData, logOut } from '../../../../redux/slices/authSlice';
import { useAppDispatch } from '../../../../hooks/redux-hooks';



interface MenuProps {
   setMenuOpen: (menuOpen: boolean) => void;
   data: UserData
}


export const Menu: React.FC<MenuProps> = ({ setMenuOpen, data } ) => {

   const dispatch = useAppDispatch();

   const onClickLogOut = () => {
      dispatch(logOut())
      setMenuOpen(false)
      window.localStorage.removeItem('token');
   }

   return (
      <section className={styles.section} onClick={() => setMenuOpen(false)} >
         <div className={styles.content} onClick={(event) => event.stopPropagation()}>
            <button className={styles.closeMenu} onClick={() => setMenuOpen(false)}>X</button>
            <Link to='/account' className={styles.userData} onClick={() => setMenuOpen(false)}> 
               <p className={styles.userName}>{data.firstName}</p>
               <p className={styles.userEmail}>{data.email}</p>
            </Link>
            <nav className={styles.nav}>
               <ul className={styles.actions}>

                  <li className={styles.action} onClick={() => setMenuOpen(false)}>
                     <Link to='./create' className={styles.link}>Создать привычку</Link>
                  </li>
                  <li className={styles.action} onClick={() => setMenuOpen(false)}>
                     <Link to='/account' className={styles.link}>Мои треки</Link>
                  </li>
               </ul>
               <div className={styles.logOut}>
                  <Link to='/login' className={styles.logOutBtn} onClick={onClickLogOut}>Выйти</Link>
               </div>
            </nav>
         </div>
      </section>
   );
}