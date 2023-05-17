import React from 'react';
import styles from "./styles.module.css";
import { categoryList } from '../../../../assets/categories/categoryList';
import { useAppDispatch } from '../../../../hooks/redux-hooks';
import { fetchCreateHabit } from '../../../../redux/slices/habitsSlice';


interface FormCreateHabitProps {
   setFormSend: (status: boolean) => void
}

export const FormCreateHabit: React.FC<FormCreateHabitProps> = ({ setFormSend } ) => {

   const dispatch = useAppDispatch();

   const [openCategory, setOpenCategory] = React.useState(false);
   const [category, setCategory] = React.useState<string>('');
   const [title, setTitle] = React.useState<string>('');
   const [habitLength, setHabitLength] = React.useState<string>('10');

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



   const onClickCategotyItem = (name: string) => {
      setOpenCategory(!openCategory);
      setCategory(name)
   }


   const dataCreate = () => {
      const date = new Date().toLocaleString();
      return date;
   }



   const onSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      const dateCreated = dataCreate();

      dispatch(fetchCreateHabit({
         dateCreated,
         lastUpdated: dateCreated,
         category,
         title,
         habitLength: Number(habitLength),
      }))
      setFormSend(true)

   }

 
   return (
      <form onSubmit={(onSubmit)}>
         <div className={styles.category}>
            <div className={styles.categoryBtn} onClick={() => setOpenCategory(!openCategory)} ref={menuBtn}>
               {category ? categoryList.map(item => {
                  if (item.name === category) {
                     return (
                        <div className={styles.categoryItem} key={item.name}>
                           <img src={item.icon} className={styles.categoryIcon} alt={item.name} />
                           <span>{item.name}</span>
                        </div>
                     )
                  }
               }) : 'Выбрать категорию'}
            </div>
            {openCategory && (

               <ul className={styles.categoryList} ref={menuList}>
                  {categoryList.map(item => (
                     <li className={styles.categoryItem} key={item.name} onClick={() => onClickCategotyItem(item.name)}>
                        <img src={item.icon} className={styles.categoryIcon} alt={item.name} />
                        <span>{item.name}</span>
                     </li>))}
               </ul>
            )}
         </div>
         <div className={styles.name}>
            <label className="dsp-none" htmlFor="habitName"></label>
            <textarea
               value={title}
               className={styles.inputName}
               id="habitName"
               placeholder="Что будем делать?"
               onChange={(event) => setTitle(event.target.value)}
            />
         </div>
         <p className={styles.daysLabel}>Количество дней</p>
         <div className={styles.days}>
            <label className={styles.daysLabel}>
               <input className={styles.daysInput} type="radio" value="10" name="habitLength" checked={habitLength === '10' ? true : false} onChange={(event) => setHabitLength(event.target.value)} />
               10
            </label>
            <label className={styles.daysLabel}>
               <input className={styles.daysInput} type="radio" value="20" name="habitLength" checked={habitLength === '20' ? true : false} onChange={(event) => setHabitLength(event.target.value)} />
               20
            </label>
            <label className={styles.daysLabel}>
               <input className={styles.daysInput} type="radio" value="30" name="habitLength" checked={habitLength === '30' ? true : false} onChange={(event) => setHabitLength(event.target.value)} />
               30
            </label>
            <label className={styles.daysLabel}>
               <input className={styles.daysInput} type="radio" value="60" name="habitLength" checked={habitLength === '60' ? true : false} onChange={(event) => setHabitLength(event.target.value)} />
               60
            </label>
         </div>
         <button className={styles.btnSubmit}>Создать</button>
      </form>
   );
}