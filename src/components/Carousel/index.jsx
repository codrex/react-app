import React, { PureComponent } from 'react';
import { func, arrayOf, node, number } from 'prop-types';
import Button from '../Button';
import CarouselContainer from '../CarouselContainer';
import './style.scss';

class Carousel extends PureComponent {
  renderItems() {
    return this.props.childElements.map((element, index) => {
      const { currentView } = this.props;
      const active = currentView === index ? 'carousel__item--enter' : '';
      const leave = currentView - 1 === index ? 'carousel__item--leave' : '';

      return (
        // eslint-disable-next-line
        <div className={`carousel__item ${active} ${leave}`} key={index}>
          <element.type {...element.props} />
        </div>
      );
    });
  }

  render() {
    const { onNextClicked, onPreviousClicked } = this.props;
    return (
      <div className="carousel">
        <div className="carousel__row">
          {this.renderItems()}
          <div className="carousel__trigger">
            <Button
              className="btn--red btn--arrow btn--arrow-left"
              withoutText
              handleClick={onPreviousClicked}
            />
            <Button
              className="btn--light btn--arrow btn--arrow-right"
              withoutText
              handleClick={onNextClicked}
            />
          </div>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  onPreviousClicked: func,
  onNextClicked: func,
  childElements: arrayOf(node).isRequired,
  currentView: number.isRequired,
};

Carousel.defaultProps = {
  onPreviousClicked: () => {},
  onNextClicked: () => {},
};
export default CarouselContainer(Carousel);
