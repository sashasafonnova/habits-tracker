import React from 'react';

import { HabitSection } from '../modules/Habit';
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
         <HabitSection />
      </BlockContainer >

      </>
   );
}

export default ItemPage;