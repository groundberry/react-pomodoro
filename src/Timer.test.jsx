import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('<Timer />', () => {
  it('finds a title', () => {
    const wrapper = shallow(<Timer />);
    expect(wrapper.find('.Timer').hasClass('Timer')).toEqual(true);
  });
});
