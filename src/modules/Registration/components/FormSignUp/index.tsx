import React from 'react';
import styles from "./styles.module.css";
import HaveAccount from '../../../../components/HaveAccount';




export const FormSignUp: React.FC = () => {
   return (
      <div className={styles.content}>
         <h1 className={styles.title}>Регистрация</h1>
         <p className={styles.subtitle}>Введите данные для входа</p>
         <form>
            <div>
               <label className="dsp-none" htmlFor="name">Имя</label>
               <input
                  className={styles.input}
                  id="name"
                  type="text"
                  placeholder="Иван"
               />
            </div>
            <div>
               <label className="dsp-none" htmlFor="email">E-mail</label>
               <input
                  className={styles.input}
                  id="email"
                  type="email"
                  placeholder="mail@mail.ru"
               />
            </div>
            <div>
               <label className="dsp-none" htmlFor="password">Пароль</label>
               <input
                  className={styles.input}
                  id="password"
                  type="password"
                  placeholder="Пароль (A-Z, a-z, 0-9)"
               />
            </div>
            <div className={styles.btns}>
               <button className={styles.btnSubmit}>Создать аккаунт</button>
            </div>
            
         </form> 
         <HaveAccount text='Уже есть аккаунт?' action='Войти' path='/login' />

      </div>       
   );
}

