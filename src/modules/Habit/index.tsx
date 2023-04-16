import React from 'react';
import styles from "./styles.module.css";

import ArrowBack from '../../components/ArrowBack';
import HabitProfile from './components/HabitProfile';



const Habit: React.FC = () => {
   return (
      <section className={styles.block}>
         <div className="container">
            <HabitProfile />
         </div>
      </section>
   );
}

export default Habit;