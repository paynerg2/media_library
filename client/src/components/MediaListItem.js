import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardHeader } from 'reactstrap';

const MediaListItem = () => {
    return (
        <div>
            <Card>
                <CardHeader>Title, Vol. X</CardHeader>
                <CardBody>
                    <CardTitle>Author</CardTitle>
                    <CardText>
                        <div>type - - - demographic</div>
                        <div>(Language) Publisher - - - ISBN</div>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default MediaListItem;
