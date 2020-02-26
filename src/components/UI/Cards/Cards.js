import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';

import Card from './Card/Card';

const Cards = props => {
    const cards = Array(props.cardNum).map((_, i) => <Card id={i} cardContent={props.cardInfo} /> )

    return (
        <Row>
            {cards}
        </Row>
    )
    
};

export default Cards;