import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap';

const MediaListItem = ({ item, type }) => {
    const renderItem = type => {
        if (type === 'book') {
            return (
                <React.Fragment>
                    <CardHeader>{item.title}</CardHeader>
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
                    <CardHeader>{item.title}</CardHeader>
                    <CardBody>
                        <CardTitle>{item.publisher}</CardTitle>
                        <CardText>{item.format}</CardText>
                    </CardBody>
                </React.Fragment>
            );
        } else if (type === 'video') {
            return (
                <React.Fragment>
                    <CardHeader>{item.title}</CardHeader>
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
                    <CardHeader>{item.title}</CardHeader>
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
            <Card>{renderItem(type)}</Card>
        </div>
    );
};

export default MediaListItem;
