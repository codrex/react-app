import React, { PureComponent } from 'react';
import { node } from 'prop-types';

function CarouselContainer(Component) {
  return class Carousel extends PureComponent {
    static propTypes = {
      children: node.isRequired,
    };

    static getChildrenAsArray = children => React.Children.toArray(children);

    state = {
      currentView: 1,
      children: Carousel.getChildrenAsArray(this.props.children),
      length: Carousel.getChildrenAsArray(this.props.children).length - 1,
    };

    next = () => {
      const { currentView, length } = this.state;
      if (currentView === length) {
        return this.setState({ currentView: 0 });
      }
      return this.setState({ currentView: currentView + 1 });
    };
    previous = () => {
      const { currentView, length } = this.state;
      if (currentView === 0) {
        return this.setState({ currentView: length });
      }
      return this.setState({ currentView: currentView - 1 });
    };

    goToView = (index) => {
      this.setState({ currentView: index });
    };

    render() {
      const { currentView, children } = this.state;
      return (
        <Component
          onPreviousClicked={this.previous}
          onNextClicked={this.next}
          childElements={children}
          currentView={currentView}
          goToView={this.goToView}
        />
      );
    }
  };
}

export default CarouselContainer;
