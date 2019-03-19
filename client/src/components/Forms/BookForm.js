import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default () => {
    return (
        <Form>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" id="title" />
            </FormGroup>
            <FormGroup>
                <Label for="author">Author</Label>
                <Input type="text" id="author" />
            </FormGroup>
            <FormGroup>
                <Label for="type">Type</Label>
                <Input type="select" id="type">
                    <option />
                    <option>manga</option>
                    <option>light novel</option>
                    <option>manwha</option>
                    <option>guide</option>
                    <option>novel</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="demographic">Demographic</Label>
                <Input type="select" id="demographic">
                    <option />
                    <option>shounen</option>
                    <option>shoujo</option>
                    <option>seinen</option>
                    <option>josei</option>
                    <option>kids</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="language">Language</Label>
                <Input type="text" id="language" />
            </FormGroup>
            <FormGroup>
                <Label for="publisher">Publisher</Label>
                <Input type="text" id="publisher" />
            </FormGroup>
            <FormGroup>
                <Label for="ISBN">ISBN</Label>
                <Input type="text" id="ISBN" />
            </FormGroup>
        </Form>
    );
};
