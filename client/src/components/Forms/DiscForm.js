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
                <Label for="publisher">Publisher</Label>
                <Input type="text" id="publisher" />
            </FormGroup>
            <FormGroup>
                <Label for="format">Format</Label>
                <Input type="select" id="format">
                    <option>BD</option>
                    <option>DVD</option>
                    <option>LD</option>
                </Input>
            </FormGroup>
        </Form>
    );
};
