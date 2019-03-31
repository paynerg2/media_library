import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMediaItems } from '../actions/mediaItemActions';
import { pluralize } from '../helpers';

import MediaListItem from './MediaListItem';

class MediaListView extends Component {
    componentDidMount() {
        this.updateLibrary();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.updateLibrary();
        }
    }

    updateLibrary() {
        const library = pluralize(this.props.selectedType);
        this.props.getMediaItems(library, this.props.userId);
    }

    renderListItems = ({ mediaItems, userId, selectedType }) => {
        return mediaItems.map(item => {
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
        userId: state.auth.userId,
        selectedType: state.selectedTab,
        mediaItems: state.mediaItem.mediaItems
    };
};

export default connect(
    mapStateToProps,
    { getMediaItems }
)(MediaListView);
