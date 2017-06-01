import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders a header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1.App-header').text()).toBe('Pomodoro clock');
  });
});
