import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from '../../components/UI/Cards/Card/Card';
import Pic1 from '../../assets/images/2-1.png';
import Pic2 from '../../assets/images/2-2.png';
import Pic3 from '../../assets/images/2-3.png';
import Pic4 from '../../assets/images/2-4.png';



class Banner2 extends Component {
    state = {
        cards: {
            card1: {
                image: {
                    img: true,
                    imgSrc: Pic1
                },
                title: {
                    title: true,
                    cardTitle: '網頁設計前後端課程教學'
                },
                text: {
                    text: true,
                    cardText: '帶你掌握程式技能轉職工程師程式課程從入門到進階讓你快速上手，學員好評推薦轉職課程!'
                }
            },
            card2: {
                image: {
                    img: true,
                    imgSrc: Pic2
                },
                title: {
                    title: true,
                    cardTitle: '網頁設計前後端課程教學'
                },
                text: {
                    text: true,
                    cardText: '帶你掌握程式技能轉職工程師程式課程從入門到進階讓你快速上手，學員好評推薦轉職課程!'
                }
            },
            card3: {
                image: {
                    img: true,
                    imgSrc: Pic3
                },
                title: {
                    title: true,
                    cardTitle: '網頁設計前後端課程教學'
                },
                text: {
                    text: true,
                    cardText: '帶你掌握程式技能轉職工程師程式課程從入門到進階讓你快速上手，學員好評推薦轉職課程!'
                }
            },
            card4: {
                image: {
                    img: true,
                    imgSrc: Pic4
                },
                title: {
                    title: true,
                    cardTitle: '網頁設計前後端課程教學'
                },
                text: {
                    text: true,
                    cardText: '帶你掌握程式技能轉職工程師程式課程從入門到進階讓你快速上手，學員好評推薦轉職課程!'
                }
            }
        }
    }

    render() {
        const cardKeysArr = Object.keys(this.state.cards);
        const card = cardKeysArr.map(card =>
            <Card
                key={card}
                styl="border-0 text-center"
                colStyl="pb-5"
                md="3"
                center
                bg="light"
                img={this.state.cards[card].image.img}
                imgSrc={this.state.cards[card].image.imgSrc}
                title={this.state.cards[card].title.title}
                cardTitle={this.state.cards[card].title.cardTitle}
                text={this.state.cards[card].text.text}
                cardText={this.state.cards[card].text.cardText} />);

        return (
            <Row>
                <Col sm="12">
                    <h3 className="text-center mb-5 mt-5 pb-4">
                        <span>關於五倍紅寶石 About 5xRuby </span>
                    </h3>
                </Col>
                {card}
            </Row>
        );
    };

};

export default Banner2;