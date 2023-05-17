import React from 'react';
import styles from "./styles.module.css";

import ProgressTrek from '../../UI/progressTrek';
import { categoryList } from '../../../../assets/categories/categoryList';

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { fetchHabits, fetchMessageSelector, fetchRemoveHabit, fetchStatusSelector, habitsSelector } from '../../../../redux/slices/habitsSlice';
import { useParams } from 'react-router-dom';
import { progressCalc } from '../../../../utils/habits/progressCalc';

import { HabitLoader } from '../HabitLoader';
import { FetchErrorMes } from '../FetchErrorMes';



interface HabitProfileProps {
   setSendRequest: (status: boolean) => void;
}


export const HabitProfile: React.FC<HabitProfileProps> = ({ setSendRequest }) => {

   const {id} = useParams();
   const dispatch = useAppDispatch();

   const fetchStatus = useAppSelector(fetchStatusSelector);
   const fetchMessage = useAppSelector(fetchMessageSelector);

   const habit = useAppSelector(habitsSelector);



   React.useEffect(() => {
      dispatch(fetchHabits({ id }))
   }, [dispatch, id]);


   const onClickDelete = (id: string) => {
      dispatch(fetchRemoveHabit({ id }))
      setSendRequest(true)
   }



   if (fetchStatus === 'loading') {
      return <HabitLoader />
   }
   

   if(!habit || Array.isArray(habit)) {
      return <FetchErrorMes message={fetchMessage}/>
   }


   return (
      <div className={styles.block}>
         <div className={styles.info}>
            {categoryList.map(item=> {
               if (item.name === habit.category){
                  return (
                     <div className={styles.category} key={item.name}>
                        <img src={item.icon} className={styles.categoryIcon} alt={item.name} />
                        <span>{item.name}</span>
                     </div> 
                  )
               }
            })}

            <h3 className={styles.title}>{habit.title}</h3>
            <p className={styles.start}><span>Начато: </span>{habit.dateCreated}</p>
            <div className={styles.progress}>
               <svg className={styles.progressIcon} width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.4 24.8889H28.8V1.55556C28.8 1.143 28.6314 0.747335 28.3314 0.455612C28.0313 0.163889 27.6243 0 27.2 0C26.7757 0 26.3687 0.163889 26.0686 0.455612C25.7686 0.747335 25.6 1.143 25.6 1.55556V24.8889H22.4V7.77778C22.4 7.36522 22.2314 6.96956 21.9314 6.67783C21.6313 6.38611 21.2243 6.22222 20.8 6.22222C20.3757 6.22222 19.9687 6.38611 19.6686 6.67783C19.3686 6.96956 19.2 7.36522 19.2 7.77778V24.8889H16V14C16 13.5874 15.8314 13.1918 15.5314 12.9001C15.2313 12.6083 14.8243 12.4444 14.4 12.4444C13.9757 12.4444 13.5687 12.6083 13.2686 12.9001C12.9686 13.1918 12.8 13.5874 12.8 14V24.8889H9.6V20.2222C9.6 19.8097 9.43143 19.414 9.13137 19.1223C8.83131 18.8306 8.42435 18.6667 8 18.6667C7.57565 18.6667 7.16869 18.8306 6.86863 19.1223C6.56857 19.414 6.4 19.8097 6.4 20.2222V24.8889H3.2V8.16667C3.2 7.75411 3.03143 7.35845 2.73137 7.06672C2.43131 6.775 2.02435 6.61111 1.6 6.61111C1.17565 6.61111 0.768687 6.775 0.468629 7.06672C0.168571 7.35845 0 7.75411 0 8.16667V26.4444C0 26.857 0.168571 27.2527 0.468629 27.5444C0.768687 27.8361 1.17565 28 1.6 28H30.4C30.8243 28 31.2313 27.8361 31.5314 27.5444C31.8314 27.2527 32 26.857 32 26.4444C32 26.0319 31.8314 25.6362 31.5314 25.3445C31.2313 25.0528 30.8243 24.8889 30.4 24.8889Z" fill="#35AFBF" />
               </svg>
               <span className={styles.progressText}>{`Прогресс: ${habit.progress} из ${habit.habitLength} (${progressCalc(habit.habitLength, habit.progress)}%)`}</span>
            </div>
            <ProgressTrek progress={habit.progress} habitLength={habit.habitLength}/>
            <button className={styles.btnCheck}>Сделать отметку</button>
            <p className={styles.lastCheck}><span>Последняя отметка:</span><br />{habit.lastUpdated}</p>
         </div>
         <div className={styles.btns}>
            <button className={styles.btnSave}>Сохранить</button>
            <button className={styles.btnDelete} onClick={() => onClickDelete(habit._id)}>Удалить трек</button>
         </div>
      </div>
   );
}

