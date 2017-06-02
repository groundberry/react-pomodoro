import React from 'react';
import { mount } from 'enzyme';
import Pomodoro from './Pomodoro';

describe('<Pomodoro />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Pomodoro />);
  });

  it('sets the class name', () => {
    expect(wrapper.hasClass('Pomodoro')).toBe(true);
  });

  describe('when clicking on <Timer />', () => {
    it('sets the state to on', () => {
      wrapper.find('.Timer').simulate('click');
      expect(wrapper.state('status')).toBe('on');
    });
  });
});
