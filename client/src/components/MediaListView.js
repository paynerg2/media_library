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

    renderListItems = ({ mediaItems, userId, selectedType }) => {
        return mediaItems
            .filter(item => item.userId === userId)
            .map(item => {
                return (
                    <div key={item._id}>
                        <MediaListItem item={item} type={selectedType} />
                    </div>
                );
            });
    };

    render() {
        return (
            <div>
                <div>{this.renderListItems(this.props)}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mediaItems: state.mediaItem.mediaItems,
        selectedType: state.selectedTab,
        userId: state.auth.userId
    };
};

export default connect(
    mapStateToProps,
    { getMediaItems }
)(MediaListView);
