import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Pic1 from '../../../assets/images/7-1.png';
import Pic2 from '../../../assets/images/7-2.png';

const Footer = () => (
    <>
        <div className="d-sm-flex">
            <div className="mr-sm-4">
                <a href="#" className="d-block mb-3">
                    <img src={Pic1} title="媒體報導" alt="媒體報導" />
                </a>
                <a href="https://www.cakeresume.com/jobs" className="d-block cakeresume">
                    <img src={Pic2} title="CakeResume 找工作" alt="CakeResume 找工作" style={{ maxWidth: "180px", marginBottom: "10px", paddingRight: "6px" }} />
                    <span className="text-secondary">找工作</span>
                </a>
            </div>
            <div>
                <Row>
                    <Col xs="12" className="mt-3 mt-md-0">
                        <Row className="d-flex justify-content-start">
                            <Col xs="auto"><h5 style={{ fontSize: "14px", fontWeight: "bold" }}><a href="#" className="text-dark">關於五倍紅寶石</a></h5></Col>
                            <Col xs="auto"><h5 style={{ fontSize: "14px", fontWeight: "bold" }}><a href="#" className="text-dark">媒體報導</a></h5></Col>
                            <Col xs="auto"><h5 style={{ fontSize: "14px", fontWeight: "bold" }}><a href="#" className="text-dark">團隊成員</a></h5></Col>
                            <Col xs="auto"><h5 style={{ fontSize: "14px", fontWeight: "bold" }}><a href="#" className="text-dark">聯絡詢價</a></h5></Col>
                            <Col xs="auto"><h5 style={{ fontSize: "14px", fontWeight: "bold" }}><a href="#" className="text-dark">常見問題</a></h5></Col>
                            <Col xs="auto"><h5 style={{ fontSize: "14px", fontWeight: "bold" }}><a href="#" className="text-dark">工作機會</a></h5></Col>
                            <Col xs="auto"><h5 style={{ fontSize: "14px", fontWeight: "bold" }}><a target="_blank" href="https://github.com/5xRuby" className="text-dark">開源專案</a></h5></Col>
                            <Col xs="auto"><h5 style={{ fontSize: "14px", fontWeight: "bold" }}><a href="#" className="text-dark">隱私權條款</a></h5></Col>
                            <Col xs="auto"><h5 style={{ fontSize: "14px", fontWeight: "bold" }}><a href="#" className="text-dark">服務條款</a></h5></Col>
                        </Row>
                    </Col>
                    <Col xs="12" className="mt-4">
                        <Row>
                            <Col md="4" xl="3">
                                <strong className="text-danger" style={{ fontSize: "150%" }}>02-2331-5247</strong>
                                <br />
                                <small style={{ fontSize: "85%" }}>Mon - Fri / 09:30 - 22:00</small>
                                <br />
                                <a href="https://www.facebook.com/5xruby" target="_blank" className="mr-3 text-secondary"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                                <a href="https://twitter.com/5xruby" target="_blank" className="mr-3 text-secondary"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                                <a href="https://github.com/5xruby" target="_blank" className="mr-3 text-secondary"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                            </Col>
                            <Col md="8" xl="9" className="mt-3 mt-md-0">
                                <p>有任何問題？</p>
                                <a href="mailto:hi@5xruby.tw" className="text-dark">hi@5xruby.tw</a>
                                <br />
                                <p>地址： <a target="_blank" href="https://goo.gl/lz5v93" className="text-dark">10046 台北市中正區衡陽路 7 號 5 樓</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="mt-5 text-center">
            <p>© 2014 - 2020 五倍紅寶石股份有限公司 (5XRUBY CO., LTD)</p>
            <p>台北市短期補習班立案 第 7594 號</p>
        </div>
    </>
);

export default Footer;