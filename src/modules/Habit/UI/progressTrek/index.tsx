import React from 'react';
import styles from "./styles.module.css";



const ProgressTrek: React.FC = () => {
   return (
      <div className={styles.progressTrek}>
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#35AFBF" stroke="#32A3B2" />
         </svg>
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#35AFBF" stroke="#32A3B2" />
         </svg>
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#35AFBF" stroke="#32A3B2" />
         </svg>
         

         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="white" stroke="#32A3B2" />
         </svg>
         
      </div>
   );
}

export default ProgressTrek;