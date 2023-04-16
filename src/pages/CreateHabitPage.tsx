import React from 'react';
import ArrowBack from '../components/ArrowBack';
import CreateHabit from '../modules/CreateHabit';



const CreateHabitPage: React.FC = () => {
   return (
      <>
         <ArrowBack />
         <CreateHabit />
      </>
   );
}

export default CreateHabitPage;