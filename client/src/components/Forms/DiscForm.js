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

class DiscForm extends Component {
    state = {
        title: '',
        format: 'BD',
        publisher: '',
        partOfSet: false
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
            format: this.state.format,
            publisher: this.state.publisher,
            partOfSet: this.state.partOfSet,
            userId: this.props.userId
        };

        if (this.props.mode === 'add') {
            this.props.saveMediaItem('discs', newItem);
        } else if (this.props.mode === 'edit') {
            this.props.editMediaItem(
                'discs',
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
                        <Label for="publisher">Publisher</Label>
                        <Input
                            type="text"
                            id="publisher"
                            onChange={this.onChange}
                            value={this.state.publisher}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="format">Format</Label>
                        <Input
                            type="select"
                            id="format"
                            onChange={this.onChange}
                            value={this.state.format}
                        >
                            <option>BD</option>
                            <option>DVD</option>
                            <option>LD</option>
                        </Input>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                id="multiplayer"
                                onChange={this.onChange}
                                value={this.state.multiplayer}
                            />{' '}
                            Part of Set:
                        </Label>
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
)(DiscForm);
