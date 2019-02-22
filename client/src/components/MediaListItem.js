import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap';

const MediaListItem = ({ item }) => {
    return (
        <div>
            <Card>
                <CardHeader>{item.name}</CardHeader>
                <CardBody>
                    <CardTitle>{item.author}</CardTitle>
                    <CardText>
                        <span>
                            {item.type} - - - {item.demographic}
                        </span>
                        <br />
                        <span>
                            ({item.language}) {item.publisher} - - - {item.ISBN}
                        </span>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default MediaListItem;
