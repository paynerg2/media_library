import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMediaItems } from '../actions/mediaItemActions';
import { pluralize } from '../helpers';

import MediaListItem from './MediaListItem';

class MediaListView extends Component {
    componentDidMount() {
        const library = pluralize(this.props.selectedType);
        this.props.getMediaItems(library);
    }

    renderListItems = ({ mediaItems }) => {
        return mediaItems.map(item => {
            return (
                <div key={item._id}>
                    <MediaListItem item={item} />
                </div>
            );
        });
    };

    render() {
        console.log(this.props.selectedType);
        console.log(this.props.mediaItems);
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
