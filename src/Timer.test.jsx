import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('<Timer />', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = jest.fn();
    wrapper = shallow(<Timer timeLeft={601} onClick={spy} />);
  });

  it('sets the class name', () => {
    expect(wrapper.find('.Timer')).toHaveLength(1);
  });

  it('renders minutes and seconds', () => {
    expect(wrapper.text()).toBe('10:01');
  });

  it('invokes the callback when clicked', () => {
    wrapper.simulate('click');
    expect(spy).toBeCalled();
  });
});
