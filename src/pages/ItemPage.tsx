import React from 'react';

import Habit from '../modules/Habit';
import ArrowBack from '../components/ArrowBack';


const ItemPage: React.FC = () => {
   return (
      <>
         <ArrowBack />
         <Habit />
      </>
   );
}

export default ItemPage;