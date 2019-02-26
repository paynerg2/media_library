import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { selectedTabChanged } from '../actions/tabActions';

class LibraryTab extends Component {
    capitalize = s => {
        if (typeof s !== 'string') return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    pluralize = s => {
        return s + 's';
    };

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
                        {this.capitalize(this.pluralize(tab))}
                    </NavLink>
                </NavItem>
            );
        });
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    {this.renderTabs()}
                    {/* <NavItem>
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
                    </NavItem> */}
                </Nav>
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
    { selectedTabChanged }
)(LibraryTab);
