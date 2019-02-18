import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './AppNavbar';
import LibraryTab from './LibraryTab';
import MediaListView from './MediaListView';

export default () => {
    return (
        <div>
            <AppNavbar />
            <LibraryTab />
            <MediaListView />
        </div>
    );
};
