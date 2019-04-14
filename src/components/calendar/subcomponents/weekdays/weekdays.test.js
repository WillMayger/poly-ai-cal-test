import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import WeekDays from './index';

// configuring enzyme adapter
configure({ adapter: new Adapter() });

test(
  'That WeekDays will render without crashing',
  () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeekDays />, div);
    ReactDOM.unmountComponentAtNode(div);
  },
);

test(
  'That WeekDays will have a length of 7',
  () => {
    const weekDays = shallow(
      <WeekDays />,
    );
    expect(weekDays.length).toEqual(7);
  },
);

test(
  'That WeekDays will render the correct days at the correct index',
  () => {
    const weekDays = shallow(
      (
        <WeekDays />
      ),
    );
    expect(weekDays.get(0).props.children).toEqual('Su');
    expect(weekDays.get(1).props.children).toEqual('Mo');
    expect(weekDays.get(2).props.children).toEqual('Tu');
    expect(weekDays.get(3).props.children).toEqual('We');
    expect(weekDays.get(4).props.children).toEqual('Th');
    expect(weekDays.get(5).props.children).toEqual('Fr');
    expect(weekDays.get(6).props.children).toEqual('Sa');
  },
);
