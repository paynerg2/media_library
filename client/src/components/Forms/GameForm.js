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

class GameForm extends Component {
    state = {
        title: '',
        platform: '',
        format: 'physical',
        multiplayer: false
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
        console.log(e);
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            title: this.state.title,
            platform: this.state.platform,
            format: this.state.format,
            multiplayer: this.state.multiplayer,
            userId: this.props.userId
        };

        if (this.props.mode === 'add') {
            this.props.saveMediaItem('games', newItem);
        } else if (this.props.mode === 'edit') {
            this.props.editMediaItem(
                'games',
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
                        <Label for="platform">Platform</Label>
                        <Input
                            type="text"
                            id="platform"
                            onChange={this.onChange}
                            value={this.state.platform}
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
                            <option>physical</option>
                            <option>digital</option>
                        </Input>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                id="multiplayer"
                                onChange={e =>
                                    this.setState({
                                        multiplayer: e.target.checked
                                    })
                                }
                                checked={this.state.multiplayer}
                            />
                            Multiplayer
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
)(GameForm);
