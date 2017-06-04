import React from 'react';
import { shallow } from 'enzyme';
import EditableTimer from './EditableTimer';
import Button from './Button';

describe('<EditableTimer />', () => {
  let wrapper;
  let spyDecrease;
  let spyIncrease;

  beforeEach(() => {
    spyDecrease = jest.fn();
    spyIncrease = jest.fn();
    wrapper = shallow(<EditableTimer
      label="Work period length: "
      time={601}
      onClickDecrease={spyDecrease}
      onClickIncrease={spyIncrease}
    />);
  });

  it('sets the class name', () => {
    expect(wrapper.hasClass('EditableTimer')).toBe(true);
  });

  it('finds increase button', () => {
    expect(wrapper.contains(<Button
      label="+"
      onClick={spyIncrease}
    />)).toBe(true);
  });

  it('finds decrease button', () => {
    expect(wrapper.contains(<Button
      label="-"
      onClick={spyDecrease}
    />)).toBe(true);
  });
});
