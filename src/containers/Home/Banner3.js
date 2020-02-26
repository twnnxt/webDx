import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Card from '../../components/UI/Cards/Card/Card';
import Pic1 from '../../assets/images/3-1.jpg';
import Pic2 from '../../assets/images/3-2.png';
import Pic3 from '../../assets/images/3-3.jpg';



class Banner3 extends Component {
    state = {
        card1: {
            image: {
                img: true,
                imgSrc: Pic1
            },
            title: {
                title: true,
                cardTitle: '工作上用得到的函數式程式設計：從觀念到實務 - 假日班'
            },
            text: {
                text: true,
                cardText: '講師：蘇泰安 (Taian Su)'
            },
            footer: {
                footer: true,
                cardFooter: '開課時間'
            },
            badge: {
                badge: true,
                badgeNum: 2,
                cardBadge: ['新開課', '開放報名中'],
                badgeColor: ['warning', 'danger'],
                footerBadge: true,
                cardFooterBadge: '2月 | 假日班',
                footerBadgeColor: 'secondary'
            }
        },
        card2: {
            image: {
                img: true,
                imgSrc: Pic2
            },
            title: {
                title: true,
                cardTitle: '工作上用得到的函數式程式設計：從觀念到實務 - 假日班'
            },
            text: {
                text: true,
                cardText: '講師：蘇泰安 (Taian Su)'
            },
            footer: {
                footer: true,
                cardFooter: '開課時間'
            },
            badge: {
                badge: true,
                badgeNum: 1,
                cardBadge: ['開放報名中'],
                badgeColor: ['danger'],
                footerBadge: true,
                cardFooterBadge: '2月 | 假日班',
                footerBadgeColor: 'secondary'
            }
        },
        card3: {
            image: {
                img: true,
                imgSrc: Pic3
            },
            title: {
                title: true,
                cardTitle: '工作上用得到的函數式程式設計：從觀念到實務 - 假日班'
            },
            text: {
                text: true,
                cardText: '講師：蘇泰安 (Taian Su)'
            },
            footer: {
                footer: true,
                cardFooter: '開課時間'
            },
            badge: {
                badge: true,
                badgeNum: 1,
                cardBadge: ['開放報名中'],
                badgeColor: ['danger'],
                footerBadge: true,
                cardFooterBadge: '2月 | 假日班',
                footerBadgeColor: 'secondary'
            }
        }
    }

    render() {
        return (
            <Row>
                <Col xs="12">
                    <h3 className="text-center mb-5 mt-5 pb-4">
                        <span>熱門網頁設計課程推薦</span>
                    </h3>
                </Col>
                <Card
                    styl="text-left"
                    md="6"
                    lg="4"
                    img={this.state.card1.image.img}
                    imgSrc={this.state.card1.image.imgSrc}
                    imgStyl={{height: '200px'}}
                    title={this.state.card1.title.title}
                    cardTitle={this.state.card1.title.cardTitle}
                    text={this.state.card1.text.text}
                    cardText={this.state.card1.text.cardText}
                    footer={this.state.card1.footer.footer}
                    cardFooter={this.state.card1.footer.cardFooter}
                    badge={this.state.card1.badge.badge}
                    badgeNum={this.state.card1.badge.badgeNum}
                    cardBadge={this.state.card1.badge.cardBadge}
                    badgeColor={this.state.card1.badge.badgeColor}
                    footerBadge={this.state.card1.badge.footerBadge}
                    cardFooterBadge={this.state.card1.badge.cardFooterBadge}
                    footerBadgeColor={this.state.card1.badge.footerBadgeColor} />
                <Card
                    styl="text-left"
                    md="6"
                    lg="4"
                    img={this.state.card2.image.img}
                    imgSrc={this.state.card2.image.imgSrc}
                    imgStyl={{height: '200px'}}
                    title={this.state.card2.title.title}
                    cardTitle={this.state.card2.title.cardTitle}
                    text={this.state.card2.text.text}
                    cardText={this.state.card2.text.cardText}
                    footer={this.state.card2.footer.footer}
                    cardFooter={this.state.card2.footer.cardFooter}
                    badge={this.state.card2.badge.badge}
                    badgeNum={this.state.card2.badge.badgeNum}
                    cardBadge={this.state.card2.badge.cardBadge}
                    badgeColor={this.state.card2.badge.badgeColor}
                    footerBadge={this.state.card2.badge.footerBadge}
                    cardFooterBadge={this.state.card2.badge.cardFooterBadge}
                    footerBadgeColor={this.state.card2.badge.footerBadgeColor} />
                <Card
                    styl="text-left"
                    md="6"
                    lg="4"
                    rowStyl="d-block d-md-none d-lg-block"
                    img={this.state.card3.image.img}
                    imgSrc={this.state.card3.image.imgSrc}
                    imgStyl={{height: '200px'}}
                    title={this.state.card3.title.title}
                    cardTitle={this.state.card3.title.cardTitle}
                    text={this.state.card3.text.text}
                    cardText={this.state.card3.text.cardText}
                    footer={this.state.card3.footer.footer}
                    cardFooter={this.state.card3.footer.cardFooter}
                    badge={this.state.card3.badge.badge}
                    badgeNum={this.state.card3.badge.badgeNum}
                    cardBadge={this.state.card3.badge.cardBadge}
                    badgeColor={this.state.card3.badge.badgeColor}
                    footerBadge={this.state.card3.badge.footerBadge}
                    cardFooterBadge={this.state.card3.badge.cardFooterBadge}
                    footerBadgeColor={this.state.card3.badge.footerBadgeColor} />
                <Col xs="12" className="text-center mt-4">
                    <Button variant="danger" size="lg">看更多網頁課程</Button>
                </Col>
            </Row>
        );
    };
};

export default Banner3;