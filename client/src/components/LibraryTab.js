import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import { selectedTabChanged } from '../actions/tabActions';
import { getMediaItems } from '../actions/mediaItemActions';
import { capitalize, pluralize } from '../helpers';

class LibraryTab extends Component {
    renderTabs() {
        const tabs = ['book', 'disc', 'video', 'game'];

        return tabs.map(tab => {
            return (
                <NavItem key={tab}>
                    <NavLink
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.props.selectedTabChanged(tab)}
                        className={
                            tab === this.props.selectedTab ? 'active' : ''
                        }
                    >
                        {capitalize(pluralize(tab))}
                    </NavLink>
                </NavItem>
            );
        });
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Nav tabs>{this.renderTabs()}</Nav>
                    <Nav>
                        <NavItem className="ml-auto">
                            <NavLink>Search</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedTab: state.selectedTab
    };
};

export default connect(
    mapStateToProps,
    { selectedTabChanged, getMediaItems }
)(LibraryTab);
