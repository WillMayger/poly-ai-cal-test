import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Row from './index';

// configuring enzyme adapter
configure({ adapter: new Adapter() });

test(
  'That Row will render without crashing',
  () => {
    const div = document.createElement('div');
    ReactDOM.render(<Row />, div);
    ReactDOM.unmountComponentAtNode(div);
  },
);

test(
  'That Row will contain one div',
  () => {
    const row = shallow(
      <Row />,
    );
    expect(row.find('div').length).toEqual(1);
  },
);

test(
  'That Row will display a child element',
  () => {
    const test = 'test';
    const row = shallow(
      (
        <Row>
          {test}
        </Row>
      ),
    );
    expect(row.text()).toEqual(test);
  },
);
