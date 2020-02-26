import React from 'react';

import classes from './PaginationItem.module.css'

const PaginationNumber = props => {
    return [...Array(props.itemNum)].map((_, i) => {
        let styles = props.styles;
        if(props.activePage - 1 === i) {
            styles = [styles, classes.active].join(' ');
        }
        return (
            <div
                key={i}
                className={styles}
                onClick={() => props.clickFunc((i + 1))}>
                {i + 1}
            </div>
        )
    });
}

export default PaginationNumber;