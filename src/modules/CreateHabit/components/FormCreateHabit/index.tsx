import React from 'react';
import styles from "./styles.module.css";
import { categoryList } from './categoryList';


interface ChooseCategory {
   icon: string,
   name: string
}


export const FormCreateHabit: React.FC = () => {

   
   const [openCategory, setOpenCategory] = React.useState(false);
   const [category, setCategory] = React.useState<ChooseCategory | null>(null);
   const menuList = React.useRef(null);
   const menuBtn = React.useRef(null);


   React.useEffect(() => {

      const onClickBody = (event: any) => {
         if (!event.composedPath().includes(menuBtn.current) && !event.composedPath().includes(menuList.current)) {
            setOpenCategory(false);
         }
      }

      document.body.addEventListener('click', onClickBody)
      return () => document.body.removeEventListener('click', onClickBody)
   }, []);



   const onClickCategotyItem = (icon: string, name: string) => {
      setOpenCategory(!openCategory);
      setCategory({
         icon,
         name,
      })
   }

   return (
      <form className={styles.form}>
         <div className={styles.category}>
            <div className={styles.categoryBtn} onClick={() => setOpenCategory(!openCategory)} ref={menuBtn}>
               {category ? (
               <div className={styles.categoryItem}>
                  <img src={category.icon} className={styles.categoryIcon} alt={category.name} />
                  <span>{category.name}</span>
               </div>) : 'Выбрать категорию'}
            </div>
            {openCategory && (                                                                                                                                                                                                                                                                                                                                                                                                                         
               <ul className={styles.categoryList} ref={menuList}>
                  {categoryList.map(category => (
                     <li className={styles.categoryItem} key={category.name} onClick={() => onClickCategotyItem(category.icon, category.name)}>
                     <img src={category.icon} className={styles.categoryIcon} alt={category.name} />
                     <span>{category.name}</span>
                  </li>))}
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
