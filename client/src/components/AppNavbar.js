import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class NavbarHeader extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/" className="mr-auto">
                        Media Library
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-2" />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar className="mr-auto">
                            <NavItem>
                                <NavLink href="#">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Github</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink href="#">GoogleAuth</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
