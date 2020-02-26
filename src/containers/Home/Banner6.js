import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

import Pic1 from '../../assets/images/6-1.png';
import Pic2 from '../../assets/images/6-2.png';

const Banner6 = () => (
    <Row className="text-center">
        <Col sm="12">
            <h3 className="mb-5 mt-5 pb-4">
                <span>想更瞭解我們嗎？</span>
            </h3>
        </Col>
        <Col sm="12">
            <p>
                您可以看看<a className="text-danger" href="#">常見問題</a>或者直接
                <Link to="/contacts" className="text-danger">線上洽詢</Link>，會有親切的客服人員回答您的問題，</p>
            <p>也可以透過社群網站隨時關注我們的動態。</p>
        </Col>
        <Col>
            <a className="pr-5">
                <img src={Pic1} alt="fb" />
            </a>
            <a>
                <img src={Pic2} alt="twitter" />
            </a>
        </Col>
    </Row>
);

export default Banner6;