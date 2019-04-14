import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Month from './index';
import { months } from '../../helpers/dates';

// configuring enzyme adapter
configure({ adapter: new Adapter() });

test(
  'That Month will render without crashing',
  () => {
    const div = document.createElement('div');
    ReactDOM.render(<Month />, div);
    ReactDOM.unmountComponentAtNode(div);
  },
);

test(
  'That Month will contain one h1',
  () => {
    const month = shallow(
      <Month />,
    );
    expect(month.find('h1').length).toEqual(1);
  },
);

test(
  'That Month will display the current month as a string',
  () => {
    const month = shallow(
      <Month />,
    );
    expect(month.text()).toEqual(months[new Date().getMonth()]);
  },
);
