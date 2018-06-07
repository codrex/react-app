import React from 'react';
import { render } from 'react-dom';
import Carousel from './components/Carousel';

import './styles.scss';

/*eslint-disable*/
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel>
          <div style={{ width: '100%', height: '100%', backgroundColor: 'pink' }} />
          <div style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }} />
          <div style={{ width: '100%', height: '100%', backgroundColor: 'brown' }} />
          <div style={{ width: '100%', height: '100%', backgroundColor: 'purple' }} />
          <div style={{ width: '100%', height: '100%', backgroundColor: 'orange' }} />
        </Carousel>
      </React.Fragment>
    );
  }
}
render(<App />, document.getElementById('app'));
