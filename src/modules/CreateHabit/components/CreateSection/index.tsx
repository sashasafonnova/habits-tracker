import React from 'react';
import styles from "./styles.module.css";

import { FormCreateHabit } from '../FormCreateHabit';
import { FetchResult } from '../FetchResult';



export const CreateSection: React.FC = () => {

   const [formSend, setFormSend] = React.useState<boolean>(false);

   return (
      <section className={styles.section}>
         {formSend ? <FetchResult setFormSend={setFormSend} /> : <FormCreateHabit setFormSend={setFormSend}/>}
      </section>
   );
}

