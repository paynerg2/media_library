import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { selectedTabChanged } from '../actions/tabActions';

const LibraryTab = () => {
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink className="active">Books</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Discs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Videos</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Games</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

export default connect(
    null,
    { selectedTabChanged }
)(LibraryTab);
