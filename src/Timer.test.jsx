import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';
import Time from './Time';

describe('<Timer />', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = jest.fn();
    wrapper = shallow(<Timer timeLeft={601} onClick={spy} />);
  });

  it('sets the class name', () => {
    expect(wrapper.hasClass('Timer')).toBe(true);
  });

  it('renders the time', () => {
    expect(wrapper.contains(<Time time={601} />)).toBe(true);
  });

  it('invokes the callback when clicked', () => {
    wrapper.simulate('click');
    expect(spy).toBeCalled();
  });
});
