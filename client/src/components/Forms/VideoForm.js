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

class VideoForm extends Component {
    state = {
        title: '',
        episodes: 0,
        quality: '',
        location: ''
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
            episodes: this.state.episodes,
            quality: this.state.quality,
            location: this.state.location,
            userId: this.props.userId
        };

        if (this.props.mode === 'add') {
            this.props.saveMediaItem('videos', newItem);
        } else if (this.props.mode === 'edit') {
            this.props.editMediaItem(
                'videos',
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
                        <Label for="platform">Number of Episodes</Label>
                        <Input
                            type="text"
                            id="episodes"
                            onChange={this.onChange}
                            value={this.state.episodes}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="format">Quality</Label>
                        <Input
                            type="text"
                            id="quality"
                            onChange={this.onChange}
                            value={this.state.quality}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="format">Location</Label>
                        <Input
                            type="text"
                            id="location"
                            onChange={this.onChange}
                            value={this.state.location}
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
)(VideoForm);
