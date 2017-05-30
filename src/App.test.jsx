import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders a title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toBe('Pomodoro clock');
  });
});
