import React from 'react';
import styles from "./styles.module.css";


type BlockTitleProps = {
   title: string;
}

const BlockTitle: React.FC<BlockTitleProps> = ( {title}) => {



   return (
      <h1 className={styles.title}>{title}</h1>
   );
}

export default BlockTitle;