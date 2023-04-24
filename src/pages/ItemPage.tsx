import React from 'react';

import { HabitProfile } from '../modules/Habit';
import ArrowBack from '../components/ArrowBack';
import BlockContainer from '../components/BlockContainer';


const ItemPage: React.FC = () => {


   React.useEffect(() => {
      window.scrollTo(0, 0);
   }, []);


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