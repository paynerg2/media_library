import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import AppNavbar from '../AppNavbar';
import GoogleAuth from '../GoogleAuth';
import LibraryTab from '../LibraryTab';
import MediaListView from '../MediaListView';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows a navbar', () => {
    expect(wrapped.find(AppNavbar).length).toEqual(1);
});

it('shows a library tab', () => {
    expect(wrapped.find(LibraryTab).length).toEqual(1);
});

it('shows a media list view', () => {
    expect(wrapped.find(MediaListView).length).toEqual(1);
});
