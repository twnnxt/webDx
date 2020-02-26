import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

import webLogo from '../../assets/images/logo.png';

const Logo = props => (
    <Navbar.Brand>
        <Link to="/">
            <img src={webLogo} alt="logo" />
        </Link>
    </Navbar.Brand>

)

export default Logo;