import React from 'react';
import styles from "./styles.module.css";
import HabitsList from './components/HabitsList';


const Habits: React.FC = () => {
   return (
      <section className={styles.block}>
         <div className="container">
            <h1 className={styles.title}>Мои привычки</h1>
            <HabitsList />
         </div>
      </section>
   );
}

export default Habits;