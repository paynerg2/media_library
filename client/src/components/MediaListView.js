import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getMediaItems } from '../actions/mediaItemActions';

import MediaListItem from './MediaListItem';

class MediaListView extends Component {
    componentDidMount() {
        this.props.getMediaItems();
    }

    renderListItems = ({ mediaItems }) => {
        const filteredItems = mediaItems.filter(
            item => item.type === this.props.selectedType
        );
        return filteredItems.map(item => {
            return (
                <div key={item.id}>
                    <MediaListItem item={item} />
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                <div>{this.renderListItems(this.props.mediaItems)}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mediaItems: state.mediaItem,
        selectedType: state.selectedTab
    };
};

export default connect(
    mapStateToProps,
    { getMediaItems }
)(MediaListView);
