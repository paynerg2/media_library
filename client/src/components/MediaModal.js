import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import BookForm from './Forms/BookForm';
import GameForm from './Forms/GameForm';
import DiscForm from './Forms/DiscForm';
import VideoForm from './Forms/VideoForm';

// TODO: Convert to a format which can send data as JSON

class MediaModal extends Component {
    state = { modal: false };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    renderForm = type => {
        if (type === 'book') {
            return <BookForm onClick={this.toggle} />;
        } else if (type === 'game') {
            return <GameForm />;
        } else if (type === 'disc') {
            return <DiscForm />;
        } else if (type === 'video') {
            //return <VideoForm />;
        }
        return <div />;
    };

    render() {
        return (
            <div>
                <Button outline color="primary" onClick={this.toggle}>
                    +
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{`Add ${
                        this.props.type
                    }`}</ModalHeader>
                    {this.renderForm(this.props.type)}
                </Modal>
            </div>
        );
    }
}

export default MediaModal;
