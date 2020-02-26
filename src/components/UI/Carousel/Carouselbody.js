import React from 'react';

import ImgTextSlide from './ImgTextSlide';
import ImgSlide from './ImgSlide';

const Carouselbody = props => {
    console.log(props)
    let type = null;
    switch (props.bodyType) {
        case 'imageText':
            type = <ImgTextSlide
                url={props.url}
                textId={props.textId} />;
            break;
        case 'image':
            type = <ImgSlide url={props.url} />;
            break;
        default:
            type = null;
            break;
    }
    return type;
}

export default Carouselbody;