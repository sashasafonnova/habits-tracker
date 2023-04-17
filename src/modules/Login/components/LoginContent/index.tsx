import React, { useState } from 'react';
import styles from "./styles.module.css";
import FormSignIn from '../FormSignIn';
import FormSignUp from '../FormSignUp';



export const LoginContent: React.FC = () => {

   const [typeForm, setTypeForm] = useState("signIn");



   return (
      <div className={styles.content}>
         {typeForm === "signIn" ? <FormSignIn setTypeForm={setTypeForm} /> : <FormSignUp setTypeForm={setTypeForm}/>}
      </div>
   );
}
