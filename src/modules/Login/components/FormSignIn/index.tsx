import React from 'react';
import styles from "./styles.module.css";

import HaveAccount from '../../../../components/HaveAccount';




export const FormSignIn: React.FC = () => {
   return (
      <div className={styles.content}>
         <h1 className={styles.title}>Вход</h1>
         <p className={styles.subtitle}>Введите логин и пароль</p>
         <form>
            <div>
               <label className="dsp-none" htmlFor="login">Логин</label>
               <input
                  className={styles.input}
                  id="login"
                  type="text"
                  placeholder="Логин"
               />
            </div>
            <div>
               <label className="dsp-none" htmlFor="password">Пароль</label>
               <input
                  className={styles.input}
                  id="password"
                  type="password"
                  placeholder="Пароль"
               />
            </div>
            <div className={styles.btns}>
               <button className={styles.btnSubmit}>Войти</button>
            </div>
            
         </form> 
         <HaveAccount text='Нет аккаунта?' action='Создать' path='/registration' />

      </div>       
   );
}
