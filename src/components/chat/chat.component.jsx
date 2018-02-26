import React from 'react';
import './chat.style.scss';
import { MessageInput } from './messages/message-input/message-input.component';

export class Chat extends React.Component {
    constructor(props) {
        super(props);     
        this.state = {
            message: ""
        };
    }    

    onChange = (e) => {
        this.setState({ message: e.currentTarget.value });
        console.log( e.currentTarget.value);
    }

    render() {       
        const socket = this.props.socket; 
        return (
            <div className="chat">
                <MessageInput/>
            </div>
        );
    }
}