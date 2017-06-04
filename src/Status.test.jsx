import React from 'react';
import { shallow } from 'enzyme';
import Status from './Status';

describe('<Status />', () => {
  let wrapper;

  it('renders the right status when working', () => {
    wrapper = shallow(<Status status="work" />);
    expect(wrapper.text()).toBe('It is time to work');
  });

  it('renders the right status when paused working', () => {
    wrapper = shallow(<Status status="stoppedWork" />);
    expect(wrapper.text()).toBe('Work paused');
  });

  it('renders the right status when resting', () => {
    wrapper = shallow(<Status status="break" />);
    expect(wrapper.text()).toBe('Time for a break!');
  });

  it('renders the right status when paused resting', () => {
    wrapper = shallow(<Status status="stoppedBreak" />);
    expect(wrapper.text()).toBe('Break paused');
  });
});
