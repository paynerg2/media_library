import React from 'react';
import {
    Button,
    Card,
    CardTitle,
    CardBody,
    CardText,
    CardHeader
} from 'reactstrap';

import { pluralize } from '../helpers';
import MediaModal from '../components/MediaModal';
import { connect } from 'react-redux';
import { deleteMediaItem } from '../actions/mediaItemActions';
import Octicon, { Trashcan, Pencil } from '@githubprimer/octicons-react';

const MediaListItem = ({ item, type, deleteMediaItem }) => {
    const renderItem = type => {
        if (type === 'book') {
            return (
                <React.Fragment>
                    <CardBody>
                        <CardTitle>{item.author}</CardTitle>
                        <CardText>
                            <span>
                                {item.type} - - - {item.demographic}
                            </span>
                            <br />
                            <span>
                                ({item.language}) {item.publisher} - - -{' '}
                                {item.ISBN}
                            </span>
                        </CardText>
                    </CardBody>
                </React.Fragment>
            );
        } else if (type === 'disc') {
            return (
                <React.Fragment>
                    <CardBody>
                        <CardTitle>{item.publisher}</CardTitle>
                        <CardText>{item.format}</CardText>
                    </CardBody>
                </React.Fragment>
            );
        } else if (type === 'video') {
            return (
                <React.Fragment>
                    <CardBody>
                        <CardTitle>{`Number of Episodes: ${
                            item.episodes
                        }`}</CardTitle>
                        <CardText>{item.quality}</CardText>
                        <CardText>{`Location: ${item.location}`}</CardText>
                    </CardBody>
                </React.Fragment>
            );
        } else if (type === 'game') {
            return (
                <React.Fragment>
                    <CardBody>
                        <CardTitle>{item.platform}</CardTitle>
                        <CardText>{item.format}</CardText>
                        <CardText>{`Multiplayer: ${
                            item.multiplayer ? 'yes' : 'no'
                        }`}</CardText>
                    </CardBody>
                </React.Fragment>
            );
        }

        return null;
    };

    return (
        <div>
            <Card>
                <CardHeader>
                    <div>
                        {item.title}
                        <MediaModal
                            type={type}
                            icon={Pencil}
                            selectedItem={item}
                            mode={'edit'}
                        />
                        <Button
                            color="none"
                            size="sm"
                            onClick={() =>
                                deleteMediaItem(pluralize(type), item._id)
                            }
                        >
                            <Octicon icon={Trashcan} />
                        </Button>
                    </div>
                </CardHeader>
                {renderItem(type)}
            </Card>
        </div>
    );
};

export default connect(
    null,
    { deleteMediaItem }
)(MediaListItem);
