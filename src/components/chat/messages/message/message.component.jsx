import React from 'react';

export class Message extends React.Component {
    constructor(props) {
        super(props);     
    }

    render() {
        return (
            <div className="message">
                <div className="message__info">
                    <p className="message__username"></p>
                    <p className="message__time"></p>
                </div>
                <div className="message__text"></div>
            </div>
        );
    }
}