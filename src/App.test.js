import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

// testing config
it('renders without crashing', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('div.App').exists()).toBe(true);
});
