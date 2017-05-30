import React from 'react';
import { shallow } from 'enzyme';
import Pomodoro from './Pomodoro';

describe('<Pomodoro />', () => {
  it('finds a Pomodoro', () => {
    const wrapper = shallow(<Pomodoro />);
    expect(wrapper.find('.Pomodoro').hasClass('Pomodoro')).toEqual(true);
  });

  it('renders a title', () => {
    const wrapper = shallow(<h2 className="Pomodoro-header">Start pomodoro</h2>);
    expect(wrapper.text()).toBe('Start pomodoro');
  });
});
