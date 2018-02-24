import React from 'react';
import './chat.style.scss';

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
                <div className="chat__message-list"></div>
                <input type="text" className="chat__input" onChange={this.onChange}/>
                <button className="chat__button">Post Message</button>                       
            </div>
        );
    }
}