import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css'

const NavigationItem = props => (
    <div className="ml-3 pt-3 pb-3 text-center nav-item">
        <NavLink
            to={props.link}
            exact={props.exact}
            className={"nav-link " + classes.Link}
        >
            {props.children}
        </NavLink>
    </div>
);

export default NavigationItem;