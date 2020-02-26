import React, { Component } from 'react';
import ReactModal from 'react-modal';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            hasError: false,
            error: '',
            errorInfo: null,
            shouldOpenModal: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
            shouldOpenModal: true
        })
    }

    handleAfterCloseFunc = () => {
        this.setState({ shouldOpenModal: false });
    }

    render() {
        console.log(this.state)
        if (this.state.hasError) {
            return (
                <ReactModal
                    isOpen={this.state.shouldOpenModal}
                    onRequestClose={this.handleAfterCloseFunc}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    ariaHideApp={false}
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            height: '50%',
                            width: '50%'
                        }
                    }}>
                    <h1 className="text-danger text-center">Error: {this.state.error.message}!</h1>
                </ReactModal>
            );
        };
        return this.props.children
    }
}

export default ErrorBoundary;