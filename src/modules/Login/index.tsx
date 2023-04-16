import React, { useState } from 'react';
import styles from "./styles.module.css";
import FormSignIn from './components/FormSignIn';
import FormSignUp from './components/FormSignUp';



const Login: React.FC = () => {

   const [typeForm, setTypeForm] = useState("signIn");

   return (
         <section className={styles.section}>
            <div className="container">
               <div className={styles.content}>
               {typeForm === "signIn" ? <FormSignIn setTypeForm={setTypeForm} /> : <FormSignUp setTypeForm={setTypeForm}/>}
               </div>
            </div>
         </section>
   );
}

export default Login;