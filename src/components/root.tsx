import * as React from 'react';

import { Header } from './';
import { Sidebar } from './sidebar/sidebar.component';

import './root.scss';
const url = 'http://localhost:3231';
const io = require('socket.io-client');

export class Root extends React.Component {
    constructor(props: {}) {
        super(props);
    }
    
    componentDidMount() {
        this.initSocket();
    }

    initSocket = () => {
        const socket = io(url);
        socket.on('connect', () => {
            console.log('CONNECTED');
        });
    }

    public render(): JSX.Element {
        return (
            <div className="app">
                <Header/>
                <div className="main-content">
                    <Sidebar/>
                </div>
                
            </div>
        );
    }
}
