import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

interface IButtonProps {
   title: string
   onClick: () => void
   white?: boolean
}

const Button: React.FC<IButtonProps> = ({ white, title, onClick }) => {
   return(
      <button
         className={classNames({
            [styles.btn]: true,
            [styles.btnWhite]: white,
         })}
         onClick={onClick}
      >
         {title}
      </button>
   );
}

export default Button;
