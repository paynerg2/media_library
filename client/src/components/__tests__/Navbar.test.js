import React from 'react';
import { shallow } from 'enzyme';

import AppNavbar from '../AppNavbar';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<AppNavbar />);
});

it('shows a Google auth component', () => {
    expect(wrapped.find('GoogleAuth').length).toEqual(1);
});

it('correctly toggles the isOpen property', () => {
    expect(wrapped.state().isOpen).toEqual(false);
    wrapped.instance().toggle();
    expect(wrapped.state('isOpen')).toEqual(true);
});
