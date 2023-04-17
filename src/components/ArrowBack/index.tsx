import React from "react";
import styles from "./styles.module.css";

// import { useNavigate } from "react-router-dom";


const ArrowBack: React.FC = () => {

   // const navigate = useNavigate();
   // onClick={() => navigate(-1)}


   
   return (
      <button className={styles.goBack}>← Назад</button>
   );
}

export default ArrowBack; 

