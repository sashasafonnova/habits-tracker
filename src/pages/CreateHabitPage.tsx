import React from 'react';


import ArrowBack from '../components/ArrowBack';
import BlockContainer from '../components/BlockContainer';
import BlockTitle from '../components/BlockTitle';
import { FormCreateHabit }  from '../modules/CreateHabit';




const CreateHabitPage: React.FC = () => {
   return (
      <>
         <BlockContainer>
            <ArrowBack />
         </BlockContainer> 

         <BlockContainer>
            <BlockTitle title={"Создать привычку"} />
         </BlockContainer>  

         <BlockContainer>
            <FormCreateHabit/>
         </BlockContainer>
      </>
   );
}

export default CreateHabitPage;