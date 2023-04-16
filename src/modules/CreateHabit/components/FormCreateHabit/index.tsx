import React from 'react';
import styles from "./styles.module.css";




const FormCreateHabit: React.FC = () => {
   return (
      <form>
         <div className={styles.category} >
            <button className={styles.categoryBtn}>Выбрать категорию</button>
            <ul className={styles.categoryList}>
               <li>Здоровье</li>
               <li>Работа</li>
               <li>Дом</li>
               <li>Дом</li>
               <li>Дом</li>
               <li>Дом</li>
               <li>Дом</li>
            </ul>
         </div>
         <div className={styles.name}>
            <label className="dsp-none" htmlFor="habitName"></label>
            <textarea 
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

export default FormCreateHabit;