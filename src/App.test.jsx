import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('finds a title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  it('contains a title', () => {
    const wrapper = shallow(<h1 className="App-header">Pomodoro clock</h1>);
    expect(wrapper.containsMatchingElement(
      <h1 className="App-header">Pomodoro clock</h1>,
    )).toEqual(true);
  });

  it('renders a title', () => {
    const wrapper = shallow(<h2 className="Pomodoro-header">Pomodoro clock</h2>);
    expect(wrapper.text()).toBe('Pomodoro clock');
  });
});
