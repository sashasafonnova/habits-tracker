import React from 'react';
import styles from "./styles.module.css";


interface FormSignUpProps {
   setTypeForm: (typeForm: string) => void;
}


const FormSignUp: React.FC<FormSignUpProps> = ({ setTypeForm }) => {
   return (
      <div>
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
               <button className={styles.btnSubmit}>Отправить</button>
               <button className={styles.btnSignIn} onClick={() => setTypeForm("signIn")}>Войти</button>
            </div>
            
         </form> 
      </div>       
   );
}

export default FormSignUp;