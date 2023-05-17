import React from 'react';
import { HabitProfile } from '../HabitProfile';
import { FetchResult } from '../FetchResult';



export const HabitSection: React.FC = () => {

   const [sendRequest, setSendRequest] = React.useState(false);

   return (
      <section>
         {sendRequest ? <FetchResult /> : <HabitProfile setSendRequest={setSendRequest}/>}
      </section>
      
   );
}

