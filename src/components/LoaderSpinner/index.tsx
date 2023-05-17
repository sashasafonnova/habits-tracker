import styles from "./styles.module.css";


export const LoaderSpinner = () => {

   return (
      <div className={styles.ldsRoller}>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
   );
}