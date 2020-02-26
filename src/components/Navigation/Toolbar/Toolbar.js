import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => (
        <Navbar bg="light" variant="light" expand="md" sticky="top">
            <Logo />
            <NavigationItems />
        </Navbar>
);


export default Toolbar;