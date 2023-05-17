import React from 'react';
import styles from "./styles.module.css";
import HabitCard from '../HabitCard';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { fetchHabits, fetchMessageSelector, fetchStatusSelector, habitsSelector } from '../../../../redux/slices/habitsSlice';
import { HabitsLoader } from '../HabitsLoader';
import EmptyList from '../EmptyList';
import { FetchErrorMes } from '../FetchErrorMes';




export const HabitsList: React.FC = () => {

   const dispatch = useAppDispatch();
   const habits = useAppSelector(habitsSelector);
   const fetchStatus = useAppSelector(fetchStatusSelector);
   const fetchMessage = useAppSelector(fetchMessageSelector);

   
   React.useEffect(() => {
      dispatch(fetchHabits({}))
   }, [dispatch])

   

   if (fetchStatus === 'loading'){
      return <HabitsLoader />
   }


   if (!habits) {
      return <FetchErrorMes message={fetchMessage} />
   }


   return (
      <div className={styles.list}>
         {Array.isArray(habits) && habits.length > 0 ? (
            <div className={styles.listContent}>
               {habits.map(habit => <HabitCard key={habit._id} habit={habit} />)}
            </div>
         ) : <EmptyList />}
      </div>
      
   );
}

