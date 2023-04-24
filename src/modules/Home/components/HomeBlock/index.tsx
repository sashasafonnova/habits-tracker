import React from 'react';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import HaveAccount from '../../../../components/HaveAccount';





export const HomeBlock: React.FC = () => {
   return (
      <div className={styles.content}>
         <h1 className={styles.title}>HabitsTracker <span>- приложение <br />для отслеживания привычек</span></h1>
         <p className={styles.subtitle}>Создавайте треки и отмечайте их выполнение каждый день.</p>
         <Link to='/registration' className={styles.btnSignUp}>Присоединиться</Link>
         <HaveAccount text='Уже есть аккаунт?' action='Войти' path='/login'/>
      </div>
   );
}
