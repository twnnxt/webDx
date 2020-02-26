import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import Cardbody from './Cardbody/Cardbody';

const myCard = props => {
    let image = null;
    if (props.img) {
        image = <Card.Img variant="Top" src={props.imgSrc} style={props.imgStyl} />
    }
    if (props.img && props.center) {
        image = (
            <Container>
                <Card.Img variant="Top" src={props.imgSrc} />
            </Container>
        )
    }

    let footer = null;
    if (props.footer) {
        footer = <Card.Footer>{props.cardfooter}</Card.Footer>
    }
    if (props.footer && props.footerBadge) {
        footer = (
            <Card.Footer>{props.cardFooter}
                <Badge variant={props.footerBadgeColor} className="ml-3">{props.cardFooterBadge}</Badge>
            </Card.Footer>)
    }

    return (
        <Col sm={props.sm} md={props.md} lg={props.lg} className={props.colStyl}>
            <Card className={props.styl} bg={props.bg}>
                {image}
                <Cardbody
                    title={props.title}
                    cardTitle={props.cardTitle}
                    text={props.text}
                    cardText={props.cardText}
                    btn={props.btn}
                    btnVariant={props.btnVariant}
                    btnText={props.btnText}
                    badge={props.badge}
                    badgeNum={props.badgeNum}
                    cardBadge={props.cardBadge}
                    badgeColor={props.badgeColor} />
                {footer}
            </Card>
        </Col>

    );
};

export default myCard;