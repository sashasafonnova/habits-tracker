import React from 'react';

import ArrowBack from '../components/ArrowBack';
import BlockContainer from '../components/BlockContainer';
import BlockTitle from '../components/BlockTitle';
import { CreateSection } from '../modules/CreateHabit/index';



const CreateHabitPage: React.FC = () => {

   React.useEffect(() => {
      window.scrollTo(0, 0);
   }, []);


   return (
      <>
         <BlockContainer>
            <ArrowBack />
         </BlockContainer> 

         <BlockContainer>
            <BlockTitle title={"Создать привычку"} />
         </BlockContainer>  

         <BlockContainer>
            <CreateSection/>
         </BlockContainer>

      </>
   );
}

export default CreateHabitPage;