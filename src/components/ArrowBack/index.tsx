import React from "react";
import styles from "./styles.module.css";

// import { useNavigate } from "react-router-dom";


const ArrowBack: React.FC = () => {

   // const navigate = useNavigate();

   return (
      <div>
         <div className="container">
            <button className={styles.goBack}>← Назад</button>
      {/* // <button className={styles.goBack} onClick={() => navigate(-1)}>← Назад</button> */}
         </div>
      </div>
   );
}

export default ArrowBack; 

