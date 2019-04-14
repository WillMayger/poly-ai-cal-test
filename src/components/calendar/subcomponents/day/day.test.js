import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Day from './index';

// configuring enzyme adapter
configure({ adapter: new Adapter() });

test(
  'That Day will render without crashing',
  () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day />, div);
    ReactDOM.unmountComponentAtNode(div);
  },
);

test(
  'That Day will contain one div',
  () => {
    const day = shallow(
      <Day />,
    );
    expect(day.find('div').length).toEqual(1);
  },
);

test(
  'That Day will have no inner text without the display prop',
  () => {
    const day = shallow(
      <Day />,
    );
    expect(day.text()).toEqual('');
  },
);

test(
  'That Day will render the text "0" with the display prop',
  () => {
    const day = shallow(
      <Day display />,
    );
    expect(day.text()).toEqual('0');
  },
);

test(
  'That Day will render the text "5" when "5" is passed in as a day',
  () => {
    const day = shallow(
      <Day display day={5} />,
    );
    expect(day.text()).toEqual('5');
  },
);

test(
  'That Day\'s className will be "day" when the highlight prop is false',
  () => {
    const day = shallow(
      <Day display day={5} />,
    );
    expect(day.find('div').prop('className')).toEqual('day');
  },
);

test(
  'That Day\'s className will be "currentDay", so it can highlight when the highlight prop is true',
  () => {
    const day = shallow(
      <Day display day={5} highlight />,
    );
    expect(day.find('div').prop('className')).toEqual('currentDay');
  },
);
