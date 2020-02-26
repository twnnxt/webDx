import React from 'react';

import classes from './Arrow.module.css';

const Arrow = (props) => {
  let styles = `slide-arrow d-none d-sm-block ${classes.Arrow} ${props.direction}`;
  if (props.left) {
    styles = `slide-arrow d-none d-sm-block ${classes.Arrow} ${props.direction} ${classes.Left}`;
  };
  if (props.right) {
    styles = `slide-arrow d-none d-sm-block ${classes.Arrow} ${props.direction} ${classes.Right}`;
  };

  return (
    <div
      className={styles}
      onClick={props.clicked}>
      {props.glyph}
    </div>
  );
}

export default Arrow;