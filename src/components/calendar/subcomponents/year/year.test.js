import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Year from './index';

// configuring enzyme adapter
configure({ adapter: new Adapter() });

test(
  'That Year will render without crashing',
  () => {
    const div = document.createElement('div');
    ReactDOM.render(<Year />, div);
    ReactDOM.unmountComponentAtNode(div);
  },
);

test(
  'That Year will contain one h1',
  () => {
    const year = shallow(
      <Year />,
    );
    expect(year.find('h1').length).toEqual(1);
  },
);

test(
  'That Year will display the current year as a string',
  () => {
    const year = shallow(
      <Year />,
    );
    expect(year.text()).toEqual(`${new Date().getFullYear()}`);
  },
);
