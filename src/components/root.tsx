import * as React from 'react';

import { Header } from './';
import { Sidebar } from './sidebar/sidebar.component';

import './root.scss';
const url = 'http://localhost:3231';
const io = require('socket.io-client');
import { IRootProps, IRootState } from './root.model';

export class Root extends React.Component<IRootProps, IRootState> {

    constructor(props: IRootProps) {
        super(props);

        this.state = {
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
            <div className="app">
                <Header socket={socket}/>
                <div className="main-content">
                    <Sidebar/>
                </div>
                
            </div>
        );
    }
}
