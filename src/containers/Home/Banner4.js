import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from '../../components/UI/Carousel/Carousel';
import Pic1 from '../../assets/images/4-1.jpg';
import Pic2 from '../../assets/images/4-2.jpg';
import Pic3 from '../../assets/images/4-3.jpg';
import Pic4 from '../../assets/images/4-4.jpg';
import Pic5 from '../../assets/images/4-5.jpg';
import Pic6 from '../../assets/images/4-6.jpg';

class Banner4 extends Component {
    state = {
        imgs: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6],
        type: 'imageText',
        text: {
            text1: {
                paragraph: 'Eddie and his team are of the most dedicated Ruby evangelists I have ever come across. With their passion and professionalism, Ruby learners will leapfrog in their progress.',
                name: 'Jason Hs',
                title: 'founder of The Big Questions & TEDxTaipei'
            },
            text2: {
                paragraph: 'Eddie and his team are of the most dedicated Ruby evangelists I have ever come across. With their passion and professionalism, Ruby learners will leapfrog in their progress.',
                name: 'P2 Author',
                title: 'P2 Author Title'
            },
            text3: {
                paragraph: 'Eddie and his team are of the most dedicated Ruby evangelists I have ever come across. With their passion and professionalism, Ruby learners will leapfrog in their progress.',
                name: 'P3 Author',
                title: 'P3 Author Title'
            },
            text4: {
                paragraph: 'Eddie and his team are of the most dedicated Ruby evangelists I have ever come across. With their passion and professionalism, Ruby learners will leapfrog in their progress.',
                name: 'P4 Author',
                title: 'P4 Author Title'
            },
            text5: {
                paragraph: 'Eddie and his team are of the most dedicated Ruby evangelists I have ever come across. With their passion and professionalism, Ruby learners will leapfrog in their progress.',
                name: 'P5 Author',
                title: 'P5 Author Title'
            },
            text6: {
                paragraph: 'Eddie and his team are of the most dedicated Ruby evangelists I have ever come across. With their passion and professionalism, Ruby learners will leapfrog in their progress.',
                name: 'P6 Author',
                title: 'P6 Author Title'
            }
        },
    }

    render() {
        return (
            <Row>
                <Col sm="12">
                    <h3 className="text-center mb-5 mt-5 pb-4">
                        <span>關於五倍紅寶石 About 5xRuby </span>
                    </h3>
                </Col>
                <Col>
                    <Carousel
                        type={this.state.type}
                        imgUrls={this.state.imgs}
                        text={this.state.text} />
                </Col>
            </Row>
        );
    };
};

export default Banner4;