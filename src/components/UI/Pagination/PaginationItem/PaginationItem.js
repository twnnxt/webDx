import React from 'react';

import PaginationArrow from './PaginationArrow';
import PaginationNumber from './PaginationNumber';
import classes from './PaginationItem.module.css';

const PaginationItem = props => (
        <>
            <PaginationArrow styles={classes.PaginationItem} arrowType="first" clickFunc={props.firstPageFunc} />
            <PaginationArrow styles={classes.PaginationItem} arrowType="prev" clickFunc={props.pagePrevFunc} />
            <PaginationNumber styles={classes.PaginationItem} activePage={props.activePage} itemNum={props.itemNum} clickFunc={props.toPageFunc} />
            <PaginationArrow styles={classes.PaginationItem} arrowType="next" clickFunc={props.pageNextFunc} />
            <PaginationArrow styles={classes.PaginationItem} arrowType="last" clickFunc={props.lastPageFunc} />
        </>
    );

export default PaginationItem;