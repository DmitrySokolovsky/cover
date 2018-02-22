import * as React from 'react';
import './chat.style.scss';

import { IChatProps, IChatState } from './chat.model';

export class Chat extends React.Component<IChatProps, IChatState> {
    constructor(props: IChatProps) {
        super(props);     
        this.state = {
            message: ""
        } as IChatState;
    }    

    onChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ message: e.currentTarget.value });
        console.log( e.currentTarget.value);
    }

    public render(): JSX.Element {       
        const socket: any = this.props.socket; 
        return (
            <div className="chat">
                <div className="chat__message-list"></div>
                <input type="text" className="chat__input" onChange={this.onChange}/>
                <button className="chat__button">Post Message</button>                       
            </div>
        );
    }
}