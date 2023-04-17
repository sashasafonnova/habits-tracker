import React from 'react';
import styles from "./styles.module.css";

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { openCategoryList } from '../../index';




export const FormCreateHabit: React.FC = () => {

   
   const categoryListIsOpen = useAppSelector(state => state.createHabitReducer.categoryList.isOpen);
   const dispatch = useAppDispatch();


   console.log(categoryListIsOpen)

   return (
      <form className={styles.form}>
         <div className={styles.category}>
            <div className={styles.categoryBtn} onClick={() => dispatch(openCategoryList(!categoryListIsOpen))}>Выбрать категорию</div>
            {categoryListIsOpen && (                                                                                                                                                                                                                                                                                                                                                                                                                         
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
