import React from 'react';

import classes from './Pagination.module.css';
import PaginationItem from './PaginationItem/PaginationItem';

const Pagination = props => (
            <div className={classes.Pagination}>
                <PaginationItem
                    activePage={props.activePage}
                    itemNum={props.pages}
                    pageNextFunc={props.pageNextClicked}
                    pagePrevFunc={props.pagePrevClicked}
                    firstPageFunc={props.firstPageClicked}
                    lastPageFunc={props.lastPageClicked}
                    toPageFunc={props.toPageClicked} />
            </div>
        );

export default Pagination;