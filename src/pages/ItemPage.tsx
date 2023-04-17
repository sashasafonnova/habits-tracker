import React from 'react';

import { HabitProfile } from '../modules/Habit';
import ArrowBack from '../components/ArrowBack';
import BlockContainer from '../components/BlockContainer';


const ItemPage: React.FC = () => {
   return (
      <>
      <BlockContainer>
         <ArrowBack />
      </BlockContainer>

      <BlockContainer>
         <HabitProfile />
      </BlockContainer >
      </>
   );
}

export default ItemPage;