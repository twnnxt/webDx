import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Cardbody = props => {
    let title = null;
    if (props.title) {
        title = <Card.Title>{props.cardTitle}</Card.Title>
    }

    let text = null;
    if (props.text) {
        text = <Card.Text>{props.cardText}</Card.Text>
    }

    let button = null;
    if (props.btn) {
        button = <Button variant={props.btnVariant}>{props.btnText}</Button>
    }

    let badge = null;
    if (props.badge) {
        badge = [...Array(props.badgeNum)].map((_, i) => (
            <Badge key={i} variant={props.badgeColor[i]}>
                {props.cardBadge[i]}
            </Badge>
        ))
    }

    return (
        <Card.Body>
            {badge}
            {title}
            {text}
            {button}
        </Card.Body>
    );
};

export default Cardbody;