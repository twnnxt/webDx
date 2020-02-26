import React from 'react';

import classes from './ImgTextSlide.module.css'

const ImgTextSlide = props =>  (
            <div className={classes.ImgTextSlide}>
                <img className={`mr-5 ${classes.Img}`} src={props.url} alt="img" />
                <div className="mb-5 text-left">
                    <p className="d-block">{props.textId.paragraph}
                        <br />
                        <span className="d-block text-danger large mt-3 mb-2">{props.textId.name}</span>
                        <span className="d-block text-secondary">{props.textId.title}</span>
                    </p>
                </div>
            </div>
    );

export default ImgTextSlide;