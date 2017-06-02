import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = jest.fn();
    wrapper = mount(<Button
      label="Reset"
      className="Pomodoro-reset-button"
      onClick={spy}
    />);
  });

  it('sets the class name', () => {
    expect(wrapper.hasClass('Button')).toBe(true);
  });

  it('invoques the callback when clicked', () => {
    wrapper.simulate('click');
    expect(spy).toBeCalled();
  });
});
