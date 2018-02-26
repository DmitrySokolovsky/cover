import React from 'react';
import { MESSAGE_SENT } from '../../../../services/events';
import { connect } from 'react-redux';

class MessageInputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    handlerChange = (e) => {
        this.setState({ message: e.currentTarget.value});
    }

    sendMessage = () => {
        const socket = this.props.socket;
        let message = this.state.message;
        let userName = this.props.user.name;
        let userTo = 'harry';
        let isRead = false;
        let date = new Date();
        console.log('message', message);
        console.log('userName', userName);
        console.log('userTo', userTo);

        socket.emit(MESSAGE_SENT, message, userTo, userName, isRead, date);

        this.setState({ message: '' });
    }

    render() {
        return (
            <div className="message-input">
                <input type="text" 
                    className="message-input__textbox" 
                    onChange={this.handlerChange}
                    value={this.state.message}/>
                <button 
                    disabled={this.state.message.length > 1 ? false : true} 
                    className="message-input__btn" 
                    onClick={this.sendMessage}>Send</button>
            </div>
        );
    }
}

const mapToStateProps = (state) => {
    let socket = state.socketApp.socket;
    let user = state.verifyUser.user;
    return {
        socket,
        user
    }
};

export const MessageInput = connect(mapToStateProps)(MessageInputComponent);