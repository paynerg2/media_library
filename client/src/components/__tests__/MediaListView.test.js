import React from 'react';
import { shallow } from 'enzyme';

import MediaListView from '../MediaListView';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<MediaListView />);
});

// Shows the appropriate number of library items
