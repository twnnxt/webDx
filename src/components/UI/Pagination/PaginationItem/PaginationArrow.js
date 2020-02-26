import React from 'react';

const PaginationArrow = props => {
    let arrow = null;
    switch (props.arrowType) {
        case 'prev':
            arrow = '＜';
            break;
        case 'next':
            arrow = '＞';
            break;
        case 'first':
            arrow = '«';
            break;
        case 'last':
            arrow = '»';
            break;
        default:
            arrow = null;
    }

    return (
        <div
            className={props.styles}
            onClick={props.clickFunc}>
            {arrow}
        </div>
    );
};

export default PaginationArrow;