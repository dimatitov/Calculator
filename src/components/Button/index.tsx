import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

interface IButtonProps {
   title: string
   onClick: () => void
   white?: boolean
   onKeyUp?: () => void
}

const Button: React.FC<IButtonProps> = ({ white, title, onClick, onKeyUp }) => {
   return(
      <button 
         className={classNames({
            [styles.btn]: true,
            [styles.btnWhite]: white,
         })}
         onClick={onClick}
         onKeyUp={onKeyUp}
      >
         
         {title}
      </button>
   );
}

export default Button;
