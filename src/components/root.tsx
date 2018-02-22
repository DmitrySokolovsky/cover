import * as React from 'react';

import { Header, Sidebar, LoginForm } from './';

import './root.scss';
const url = 'http://localhost:3231';
const io = require('socket.io-client');
import { IRootProps, IRootState } from './root.model';

export class Root extends React.Component<IRootProps, IRootState> {

    constructor(props: IRootProps) {
        super(props);

        this.state = {
            user: null,
            socket: null
        } as IRootState;
    }
    
    componentDidMount() {
        this.initSocket();
    }

    initSocket = () => {
        const socket = io(url);
        socket.on('connect', () => {
            console.log('CONNECTED');
        });

        this.setState({ socket: socket });
    }

    public render(): JSX.Element {
        const socket: any = this.state.socket;

        return (
            <div className="container">
                {
                    this.state.user === null ? 
                    <LoginForm socket={socket}/> :
                    <div className="app">
                        <Header socket={socket}/>
                        <div className="main-content">
                            <Sidebar/>
                        </div>                
                    </div> 
                }
            </div>
            
        );
    }
}
