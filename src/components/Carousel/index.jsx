import React, { PureComponent } from 'react';
import { node } from 'prop-types';
import Button from '../Button';
import './style.scss';

class Carousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 0,
      length: this.getChildrenAsArray().length - 1,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  getChildrenAsArray() {
    return React.Children.toArray(this.props.children);
  }

  next() {
    const { currentView, length } = this.state;
    if (currentView === length) {
      return this.setState({ currentView: 0 });
    }
    return this.setState({ currentView: currentView + 1 });
  }
  previous() {
    const { currentView, length } = this.state;
    if (currentView === 0) {
      return this.setState({ currentView: length });
    }
    return this.setState({ currentView: currentView - 1 });
  }

  renderItems() {
    return this.getChildrenAsArray().map((element, index) => {
      const { currentView } = this.state;
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
    return (
      <div className="carousel">
        {this.renderItems()}
        <div className="carousel__trigger">
          <Button
            className="btn--red btn--arrow btn--arrow-left"
            withoutText
            handleClick={this.previous}
          />
          <Button
            className="btn--light btn--arrow btn--arrow-right"
            withoutText
            handleClick={this.next}
          />
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  children: node.isRequired,
};
export default Carousel;
