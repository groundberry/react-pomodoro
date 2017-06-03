import React from 'react';
import { shallow } from 'enzyme';
import Time from './Time';

describe('<Time />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Time time={601} />);
  });

  it('sets the class name', () => {
    expect(wrapper.hasClass('Time')).toBe(true);
  });

  it('renders minutes and seconds', () => {
    expect(wrapper.text()).toBe('10:01');
  });
});
