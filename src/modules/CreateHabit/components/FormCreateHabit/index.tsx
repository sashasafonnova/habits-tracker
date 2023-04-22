import React from 'react';
import styles from "./styles.module.css";



export const FormCreateHabit: React.FC = () => {

   
   const [openCategory, setOpenCategory] = React.useState(false);



   return (
      <form className={styles.form}>
         <div className={styles.category}>
            <div className={styles.categoryBtn} onClick={() => setOpenCategory(!openCategory)}>Выбрать категорию</div>
            {openCategory && (                                                                                                                                                                                                                                                                                                                                                                                                                         
               <ul className={styles.categoryList}>
                  <li>Здоровье</li>
                  <li>Работа</li>
                  <li>Дом</li>
                  <li>Дом</li>
                  <li>Дом</li>
                  <li>Дом</li>
                  <li>Дом</li>
               </ul>)}
         </div>
         <div className={styles.name}>
            <label className="dsp-none" htmlFor="habitName"></label>
            <textarea 
               onClick={() => console.log("categoryListIsOpen")}
               className={styles.inputName}
               id="habitName" 
               placeholder="Что будем делать?"/>
         </div>
         <p className={styles.daysLabel}>Количество дней</p>
         <div className={styles.days}>
            <input type="radio" name="Продолжительность"/>
            <label htmlFor="">10</label>
            <input type="radio" name="Продолжительность" />
            <label htmlFor="">20</label>
            <input type="radio" name="Продолжительность" />
            <label htmlFor="">30</label>
            <input type="radio" name="Продолжительность" />
            <label htmlFor="">60</label>
         </div>
         <button className={styles.btnSubmit}>Создать</button>
      </form>
   );
}
