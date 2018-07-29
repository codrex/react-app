/* eslint-disable react/no-array-index-key */

import React, { PureComponent } from 'react';
import { func, arrayOf, node, number } from 'prop-types';
import Button from '../Button';
import CarouselContainer from '../CarouselContainer';
import './style.scss';

const ITEM_WIDTH = 80;
const INITIAL_X_POS = (100 - ITEM_WIDTH) / 2;

const translateX = value => ({ transform: `translateX(${value}%)` });
const toPercentageString = value => `${value}%`;
const computeNextPOS = (currentView) => {
  const nextItemPOS = ITEM_WIDTH * currentView;
  return INITIAL_X_POS - nextItemPOS;
};

class Carousel extends PureComponent {
  static renderButton(btnClassNames, btnWrapperClassNames, onClickHandler) {
    return (
      <div
        className={`jcarousel__btn-wrapper ${btnWrapperClassNames}`}
        style={{ width: toPercentageString(INITIAL_X_POS) }}
      >
        <Button
          className={`btn--red btn--arrow btn--arrow-left jcarousel__btn ${btnClassNames}`}
          withoutText
          handleClick={onClickHandler}
        />
      </div>
    );
  }

  handleGoToView = index => () => this.props.goToView(index);

  renderIndicators() {
    const { childElements, currentView } = this.props;
    return (
      <div className="jcarousel__indicators">
        {childElements.map((element, index) => {
          const active = currentView === index ? 'jcarousel__indicator--active' : '';
          return (
            <div
              role="presentation"
              onClick={this.handleGoToView(index)}
              key={index}
              className={`jcarousel__indicator ${active}`}
            />
          );
        })}
      </div>
    );
  }
  renderItems() {
    const { currentView, childElements } = this.props;
    return childElements.map((element, index) => {
      const itemStyle = translateX(index * 100);
      const active = currentView === index ? 'jcarousel__item--active' : '';
      return (
        <div
          style={{ width: toPercentageString(ITEM_WIDTH), ...itemStyle }}
          className={`jcarousel__item ${active}`}
          key={index}
        >
          <element.type {...element.props} />
        </div>
      );
    });
  }

  render() {
    const {
      onNextClicked, onPreviousClicked, currentView, childElements,
    } = this.props;
    const hideNextBtn = currentView === childElements.length - 1 ? 'jcarousel__btn--hide' : '';
    const hidePreviousBtn = currentView === 0 ? 'jcarousel__btn--hide' : '';

    return (
      <div className="jcarousel">
        <div className="jcarousel__row" style={translateX(computeNextPOS(currentView))}>
          {this.renderItems()}
        </div>
        {Carousel.renderButton(
          'jcarousel__btn jcarousel__btn--left',
          `jcarousel__btn-wrapper--left ${hidePreviousBtn}`,
          onPreviousClicked,
        )}

        {Carousel.renderButton(
          'jcarousel__btn jcarousel__btn--right',
          `jcarousel__btn-wrapper--right ${hideNextBtn}`,
          onNextClicked,
        )}
        {this.renderIndicators()}
      </div>
    );
  }
}

Carousel.propTypes = {
  onPreviousClicked: func,
  onNextClicked: func,
  goToView: func,
  childElements: arrayOf(node).isRequired,
  currentView: number.isRequired,
};

Carousel.defaultProps = {
  onPreviousClicked: () => {},
  onNextClicked: () => {},
  goToView: () => {},
};
export default CarouselContainer(Carousel);
