import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Navbar from '../Navbar';
import GoogleAuth from '../GoogleAuth';
import LibraryTree from '../LibraryTree';
import MediaListView from '../MediaListView';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows a navbar', () => {
    expect(wrapped.find(Navbar).length).toEqual(1);
});

it('shows google authentication object', () => {
    expect(wrapped.find(GoogleAuth).length).toEqual(1);
});

it('shows a library tree', () => {
    expect(wrapped.find(LibraryTree).length).toEqual(1);
});

it('shows a media list view', () => {
    expect(wrapped.find(MediaListView).length).toEqual(1);
});
