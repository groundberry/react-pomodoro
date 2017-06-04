import React from 'react';
import { shallow } from 'enzyme';
import ClickableTimer from './ClickableTimer';
import Time from './Time';

describe('<ClickableTimer />', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = jest.fn();
    wrapper = shallow(<ClickableTimer timeLeft={601} onClick={spy} />);
  });

  it('sets the class name', () => {
    expect(wrapper.hasClass('ClickableTimer')).toBe(true);
  });

  it('renders the time', () => {
    expect(wrapper.contains(<Time time={601} />)).toBe(true);
  });

  it('invokes the callback when clicked', () => {
    wrapper.find('.ClickableTimer-tomato').simulate('click');
    expect(spy).toBeCalled();
  });
});
