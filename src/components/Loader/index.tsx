import React from 'react';
import styles from "./styles.module.css";
import { LoaderSpinner } from '../LoaderSpinner';


export const Loader: React.FC = () => {

   return (
      <div className={styles.loader}>  
         <LoaderSpinner/>
      </div>
   );
}