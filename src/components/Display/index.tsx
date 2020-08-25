import React from 'react';
import styles from './styles.module.css';

interface IDisplayProps {
   logs: string
   calculatedValue: number
}

const Display: React.FC<IDisplayProps> = ({ logs, calculatedValue }) => {
   return(
      <div className={styles.resultArea}>
         <div className={styles.resultAreaCalulated}>{logs || "0"}</div>
         <div className={styles.resultAreaResult}>{calculatedValue || 0}</div>
      </div>
   );
}


export default Display;