import React from 'react';

import { Container } from 'react-bootstrap';

const Block = props => (
    <div className={`mb-5 + ${props.bg}`}>
        <Container>
            {props.children}
        </Container>
    </div >
);

export default Block;