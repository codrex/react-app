import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button';

import './styles.scss';

/*eslint-disable*/
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button className="btn--red" text="Facebook" />
        <Button className="btn--red" text="Instagram" />
        <Button className="btn--red btn--arrow" withoutText />
        <Button className="btn--white btn--arrow" text="read more" />
      </React.Fragment>
    );
  }
}
render(<App />, document.getElementById('app'));
