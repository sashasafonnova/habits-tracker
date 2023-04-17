import React from 'react';

import BlockContainer from '../components/BlockContainer';
import BlockTitle from '../components/BlockTitle';
import { HabitsList } from '../modules/AllHabits';


const HabitsPage: React.FC = () => {
   return (
      <>
         <BlockContainer>
            <BlockTitle title={"Мои привычки"} />
         </BlockContainer>

         <BlockContainer>   
            <HabitsList/>
         </BlockContainer>

      </>
   );
}

export default HabitsPage;