import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { saveMediaItem } from '../../actions/mediaItemActions';

class BookForm extends Component {
    state = {
        title: '',
        author: '',
        type: '',
        demographic: '',
        language: '',
        publisher: '',
        ISBN: ''
    };

    onChange = e => {
        console.log(e.target.id);
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            title: this.state.title,
            author: this.state.author,
            type: this.state.type,
            demographic: this.state.demographic,
            language: this.state.language,
            publisher: this.state.publisher,
            ISBN: this.state.ISBN,
            userId: this.props.userId
        };
        this.props.saveMediaItem('books', newItem);
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <ModalBody>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            type="text"
                            id="title"
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input
                            type="text"
                            id="author"
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="type">Type</Label>
                        <Input type="select" id="type" onChange={this.onChange}>
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
                        <Input
                            type="select"
                            id="demographic"
                            onChange={this.onChange}
                        >
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
                        <Input
                            type="text"
                            id="language"
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="publisher">Publisher</Label>
                        <Input
                            type="text"
                            id="publisher"
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ISBN">ISBN</Label>
                        <Input type="text" id="ISBN" onChange={this.onChange} />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button
                        type="submit"
                        color="primary"
                        onClick={this.props.onClick}
                    >
                        Submit
                    </Button>
                    <Button color="secondary" onClick={this.props.onClick}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    userId: state.auth.userId
});

export default connect(
    mapStateToProps,
    { saveMediaItem }
)(BookForm);
