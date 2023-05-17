import React from 'react';

import BlockContainer from '../components/BlockContainer';
import BlockTitle from '../components/BlockTitle';
import { AddHabitBtn, HabitsList } from '../modules/AllHabits';


const HabitsPage: React.FC = () => {

   React.useEffect(() => {
      window.scrollTo(0, 0);
   }, []);


   return (
      <>
         <BlockContainer>
            <BlockTitle title={"Мои привычки"} />
         </BlockContainer>

         <BlockContainer>
            <AddHabitBtn />
         </BlockContainer>

         <BlockContainer>  
            <HabitsList/>
         </BlockContainer>

       

      </>
   );
}

export default HabitsPage;