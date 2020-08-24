import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

function Button({ repaint, children }) {
   return(
      <button 
         className={classNames({
            "btn": true,
            "btn--repaint": repaint === "repaint",
         })}>

         {children}
      </button>
   );
}

Button.propTypes = {
   repaint: PropTypes.oneOf(["repaint"]),

}


export default Button;