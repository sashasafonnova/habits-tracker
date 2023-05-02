import React from 'react';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import { clearFetchMessage } from '../../redux/slices/authSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';


interface HaveAccountProps {
   text: string,
   action: string,
   path: string
}


const HaveAccount: React.FC<HaveAccountProps> = ( {text, action, path} ) => {

   const dispatch = useAppDispatch();
   
   return (
      <div className={styles.content}>
         <span className={styles.title}>{text}</span>
         <Link to={path} className={styles.btn} onClick={() => dispatch(clearFetchMessage())}>{action}</Link>
      </div>
   );
}


export default HaveAccount;
