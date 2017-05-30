import React from 'react';
import { shallow } from 'enzyme';
import Pomodoro from './Pomodoro';

describe('<Pomodoro />', () => {
  it('renders a title', () => {
    const wrapper = shallow(<Pomodoro />);
    expect(wrapper.text()).toBe('Start pomodoro');
  });
});
