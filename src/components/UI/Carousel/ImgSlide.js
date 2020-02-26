import React from 'react';

const ImgSlide = props => {
  const styles = {
    position: 'relative',
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px'
  };

  return (
      <div style={styles} />
  );
}

export default ImgSlide;