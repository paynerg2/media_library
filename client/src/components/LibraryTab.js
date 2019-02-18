import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const LibraryTree = () => {
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

export default LibraryTree;
