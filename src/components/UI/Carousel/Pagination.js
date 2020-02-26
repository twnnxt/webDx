import React from 'react';

import classes from './Pagination.module.css';

const Pagination = (props) => {
    let styles = `${classes.Pagination} d-none d-sm-block`;
    if (props.id === props.currentId) {
        styles = `${classes.Pagination} ${classes.active} d-none d-sm-block`;
    } else {
        styles = `${classes.Pagination} d-none d-sm-block`;
    }

    const paginationStartLocation = 50 - props.pageNum * 3 / 2;

    return (
        <div
            className={styles}
            style={{ left: `${paginationStartLocation + props.id * 3}% ` }}
            onClick={props.clicked}>
        </div>
    );
};

export default Pagination;