import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../Navbar';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<Navbar />);
});

it('shows a Google auth component', () => {
    expect(wrapped.find('GoogleAuth').length).toEqual(1);
});
