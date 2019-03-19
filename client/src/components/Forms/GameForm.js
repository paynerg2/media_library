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
                <Label for="platform">Platform</Label>
                <Input type="text" id="platform" />
            </FormGroup>
            <FormGroup>
                <Label for="format">Format</Label>
                <Input type="select" id="type">
                    <option>physical</option>
                    <option>digital</option>
                </Input>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />
                    Multiplayer
                </Label>
            </FormGroup>
        </Form>
    );
};
