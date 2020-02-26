import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from '../../components/UI/Cards/Card/Card';
import Pic1 from '../../assets/images/5-1.png';
import Pic2 from '../../assets/images/5-2.png';
import Pic3 from '../../assets/images/5-3.jpg';



class Banner5 extends Component {
    state = {
        card1: {
            image: {
                img: true,
                imgSrc: Pic1
            },
            title: {
                title: true,
                cardTitle: 'SpaceNextDoor'
            },
            text: {
                text: true,
                cardText: 'Space Next Door is inspired by the sharing economy in which we hope to encourage people to put up their unused space so that users looking for personal or business storage space have better options, closer to where they need it. We are striving to build a trusted community marketplace for you to list, discover and book the nearest and best space at affordable prices.'
            }
        },
        card2: {
            image: {
                img: true,
                imgSrc: Pic2
            },
            title: {
                title: true,
                cardTitle: 'SpaceNextDoor'
            },
            text: {
                text: true,
                cardText: 'Space Next Door is inspired by the sharing economy in which we hope to encourage people to put up their unused space so that users looking for personal or business storage space have better options, closer to where they need it. We are striving to build a trusted community marketplace for you to list, discover and book the nearest and best space at affordable prices.'
            }
        },
        card3: {
            image: {
                img: true,
                imgSrc: Pic3
            },
            title: {
                title: true,
                cardTitle: 'SpaceNextDoor'
            },
            text: {
                text: true,
                cardText: 'Space Next Door is inspired by the sharing economy in which we hope to encourage people to put up their unused space so that users looking for personal or business storage space have better options, closer to where they need it. We are striving to build a trusted community marketplace for you to list, discover and book the nearest and best space at affordable prices.'
            }
        }
    }

    render() {
        return (
            <Row>
                <Col sm="12">
                    <h3 className="text-center mb-5 mt-5 pb-4">
                        <span>案例作品 Showcase </span>
                    </h3>
                </Col>
                <Card
                    styl="text-left"
                    md="6"
                    lg="4"
                    img={this.state.card1.image.img}
                    imgSrc={this.state.card1.image.imgSrc}
                    title={this.state.card1.title.title}
                    cardTitle={this.state.card1.title.cardTitle}
                    text={this.state.card1.text.text}
                    cardText={this.state.card1.text.cardText} />
                <Card
                    styl="text-left"
                    md="6"
                    lg="4"
                    img={this.state.card2.image.img}
                    imgSrc={this.state.card2.image.imgSrc}
                    title={this.state.card2.title.title}
                    cardTitle={this.state.card2.title.cardTitle}
                    text={this.state.card2.text.text}
                    cardText={this.state.card2.text.cardText} />
                <Card
                    styl="text-left"
                    md="6"
                    lg="4"
                    colStyl="d-block d-md-none d-lg-block"
                    img={this.state.card3.image.img}
                    imgSrc={this.state.card3.image.imgSrc}
                    title={this.state.card3.title.title}
                    cardTitle={this.state.card3.title.cardTitle}
                    text={this.state.card3.text.text}
                    cardText={this.state.card3.text.cardText} />
                <Col className="text-right mt-3">
                    <a className="text-danger" href="/">...更多案例</a>
                </Col>
            </Row>
        );
    };
};

export default Banner5;