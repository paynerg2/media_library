import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

class MediaModal extends Component {
    state = { modal: false };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    render() {
        return (
            <div>
                <Button outline color="primary" onClick={this.toggle}>
                    +
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal Title</ModalHeader>
                    <ModalBody>lorem</ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                            Do something
                        </Button>
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default MediaModal;
