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

  describe('when we click on <Timer />', () => {
    describe('when we had stopped working', () => {
      beforeEach(() => {
        wrapper.setState({ status: 'stoppedWork' });
      });

      it('sets the status to work', () => {
        wrapper.find('.Timer').simulate('click');
        expect(wrapper.state('status')).toBe('work');
      });
    });

    describe('when we had stopped resting', () => {
      beforeEach(() => {
        wrapper.setState({ status: 'stoppedBreak' });
      });

      it('sets the status to break', () => {
        wrapper.find('.Timer').simulate('click');
        expect(wrapper.state('status')).toBe('break');
      });
    });

    describe('when we were working', () => {
      beforeEach(() => {
        wrapper.setState({ status: 'work' });
      });

      it('sets the status to stoppedWork', () => {
        wrapper.find('.Timer').simulate('click');
        expect(wrapper.state('status')).toBe('stoppedWork');
      });
    });

    describe('when we were resting', () => {
      beforeEach(() => {
        wrapper.setState({ status: 'break' });
      });

      it('sets the status to stoppedBreak', () => {
        wrapper.find('.Timer').simulate('click');
        expect(wrapper.state('status')).toBe('stoppedBreak');
      });
    });
  });
});
