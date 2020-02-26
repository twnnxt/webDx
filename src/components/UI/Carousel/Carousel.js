import React, { Component } from 'react';

import Arrow from './Arrow';
import Carouselbody from './Carouselbody';
import Pagination from './Pagination';
import classes from './Carousel.module.css';



class Carousel extends Component {
  state = {
    currentImageIndex: 0,
  };

  componentDidMount() {
    this.autoPlay(this.props.imgUrls);
  };

  autoPlayFlag = null;

  autoPlay = (imgUrls) => {
    this.autoPlayFlag = setInterval(() => {
      if (this.state.currentImageIndex === imgUrls.length - 1) {
        this.setState({ currentImageIndex: 0 })
      } else {
        this.setState(prevState => { return { currentImageIndex: prevState.currentImageIndex + 1 } })
      }
    }, 3000)
  };


  pause = () => {
    clearInterval(this.autoPlayFlag);
  }


  previousSlideHandler = (imgUrls) => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlideHandler = (imgUrls) => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };

  paginationClickHandler = selfIndex => {
    this.setState({
      currentImageIndex: selfIndex
    });
  };

  render() {
    let leftArrow = null;
    let rightArrow = null;
    if (this.props.hasArrow) {
      leftArrow = (
        <Arrow
          left
          direction="left"
          clicked={() => this.previousSlideHandler(this.props.imgUrls)}
          glyph="&#9664;" />);
      rightArrow = (
        <Arrow
          right
          direction="right"
          clicked={() => this.nextSlideHandler(this.props.imgUrls)}
          glyph="&#9654;" />
      );
    }


    const paginations = this.props.imgUrls
      .map((_, i) =>
        <Pagination
          key={i}
          id={i}
          currentId={this.state.currentImageIndex}
          pageNum={this.props.imgUrls.length}
          clicked={() => this.paginationClickHandler(i)} />)

    return (
      <div className={classes.Carousel}
        onMouseOver={this.pause}
        onMouseOut={() => this.autoPlay(this.props.imgUrls)} >
        {leftArrow}
        <Carouselbody
          bodyType={this.props.type}
          url={this.props.imgUrls[this.state.currentImageIndex]}
          textId={this.props.text && this.props.text[`text${this.state.currentImageIndex + 1}`]} />
        {rightArrow}
        {paginations}
      </ div>
    );
  };
};

export default Carousel;