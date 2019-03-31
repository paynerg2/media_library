import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMediaItems } from '../actions/mediaItemActions';
import { pluralize } from '../helpers';

import MediaListItem from './MediaListItem';

class MediaListView extends Component {
    componentDidMount() {
        console.log('media list view mounting');
        console.log(`auth: ${this.props.userId}`);
        this.updateLibrary();
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps);
        if (this.props.userId !== prevProps.userId) {
            this.updateLibrary();
        }
    }

    updateLibrary() {
        const library = pluralize(this.props.selectedType);
        this.props.getMediaItems(library, this.props.userId);
        console.log(`libary updated with userId ${this.props.userId}`);
    }

    renderListItems = ({ mediaItems, userId, selectedType }) => {
        console.log(`rendering and userid is ${userId}`);
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
