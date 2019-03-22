import React, { Component } from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';
import Octicon from '@githubprimer/octicons-react';

import BookForm from './Forms/BookForm';
import GameForm from './Forms/GameForm';
import DiscForm from './Forms/DiscForm';
import VideoForm from './Forms/VideoForm';

class MediaModal extends Component {
    state = { modal: false };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    renderForm = ({ type, mode }) => {
        if (type === 'book') {
            console.log(mode);
            return (
                <BookForm
                    onClick={this.toggle}
                    selectedItem={this.props.selectedItem}
                    mode={mode}
                />
            );
        } else if (type === 'game') {
            return (
                <GameForm
                    onClick={this.toggle}
                    selectedItem={this.props.selectedItem}
                    mode={mode}
                />
            );
        } else if (type === 'disc') {
            return (
                <DiscForm
                    onClick={this.toggle}
                    selectedItem={this.props.selectedItem}
                    mode={mode}
                />
            );
        } else if (type === 'video') {
            // TODO: Convert to class-based component
            //return <VideoForm />;
        }
        return <div />;
    };

    render() {
        return (
            <div>
                <Button size="sm" outline color="primary" onClick={this.toggle}>
                    <Octicon icon={this.props.icon} />
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{`${this.props.mode} ${
                        this.props.type
                    }`}</ModalHeader>
                    {this.renderForm(this.props)}
                </Modal>
            </div>
        );
    }
}

export default MediaModal;
