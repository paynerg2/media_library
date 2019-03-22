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
import { saveMediaItem, editMediaItem } from '../../actions/mediaItemActions';

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

    componentDidMount() {
        for (let property in this.props.selectedItem) {
            if (property) {
                if (property in this.state) {
                    this.setState({
                        [property]: this.props.selectedItem[property]
                    });
                }
            }
        }
    }

    onChange = e => {
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

        if (this.props.mode === 'add') {
            this.props.saveMediaItem('books', newItem);
        } else if (this.props.mode === 'edit') {
            this.props.editMediaItem(
                'books',
                this.props.selectedItem._id,
                newItem
            );
        }
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
                            value={this.state.title}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input
                            type="text"
                            id="author"
                            onChange={this.onChange}
                            value={this.state.author}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="type">Type</Label>
                        <Input
                            type="select"
                            id="type"
                            onChange={this.onChange}
                            value={this.state.type}
                        >
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
                            value={this.state.demographic}
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
                            value={this.state.language}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="publisher">Publisher</Label>
                        <Input
                            type="text"
                            id="publisher"
                            onChange={this.onChange}
                            value={this.state.publisher}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="ISBN">ISBN</Label>
                        <Input
                            type="text"
                            id="ISBN"
                            onChange={this.onChange}
                            value={this.state.ISBN}
                        />
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
    { saveMediaItem, editMediaItem }
)(BookForm);
