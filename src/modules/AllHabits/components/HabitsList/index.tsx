import React from 'react';
import styles from "./styles.module.css";
import HabitCard from '../HabitCard';


export const HabitsList: React.FC = () => {
   return (
      <div className={styles.list}>
         <HabitCard />
         <HabitCard />
         <HabitCard />
         <HabitCard />
         <HabitCard />
         <HabitCard />
      </div>
   );
}

