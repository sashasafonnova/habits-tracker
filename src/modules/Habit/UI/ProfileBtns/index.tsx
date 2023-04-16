import React from 'react';
import styles from "./styles.module.css";



const ProfileBtns: React.FC = () => {
   return (
      <div className={styles.btns}>
         <button className={styles.btnSave}>Сохранить</button>
         <button className={styles.btnDelete}>Удалить трек</button>
      </div>
   );
}

export default ProfileBtns;