import React from 'react';
import styles from "./styles.module.css";


import FormCreateHabit from './components/FormCreateHabit';



const CreateHabit: React.FC = () => {
   return (
      <section className={styles.block}>
         <div className="container">
            <h1 className={styles.title}>Создать привычку</h1>
            <FormCreateHabit />
         </div>
      </section>
   );
}

export default CreateHabit;