import React from 'react';
import { render } from 'react-dom';

import './styles.scss';

/*eslint-disable*/
class App extends React.Component {
  render() {
    return <div>Hello world!</div>;
  }
}
render(<App />, document.getElementById('app'));
