import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Out from '../../../hoc/Out/Out';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    return (
        <Out>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavigationItem link="/online">線上課程</NavigationItem>
                    <NavigationItem link="/astro">ASTRO Camp</NavigationItem>
                    <NavigationItem link="/fecourse">全方位課程</NavigationItem>
                    <NavigationItem link="/shortterm">短期課程</NavigationItem>
                    <NavigationItem link="/project">專案開發</NavigationItem>
                    <NavigationItem link="/tranning">企業代訓</NavigationItem>
                    <NavigationItem link="/posts">Posts</NavigationItem>
                    <NavigationItem link="/contacts">Contacts</NavigationItem>
                </Nav>
            </Navbar.Collapse>
        </Out>
    );
};

export default NavigationItems;