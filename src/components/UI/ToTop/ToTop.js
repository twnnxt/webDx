import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import classes from './ToTop.module.css';

const ToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
      
    return (
            <div className={classes.ToTop} onClick={scrollToTop}>
                <FontAwesomeIcon icon={faAngleUp} size="2x" />
            </div>
        )
    };

export default ToTop;