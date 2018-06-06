import React from 'react';
import { render } from 'react-dom';
import CaptionArea from './components/CaptionArea';

import './styles.scss';

/*eslint-disable*/
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CaptionArea />
      </React.Fragment>
    );
  }
}
render(<App />, document.getElementById('app'));
