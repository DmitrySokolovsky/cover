import * as React from 'react';
import { VERIFY_USER, USER_CONNECTED } from '../services/events';

import { Header, Sidebar, LoginForm } from './';

import './root.scss';
const url = 'http://localhost:3231';
const io = require('socket.io-client');

export class Root extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            socket: null
        };
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

    setUser = (user) => {
        const socket = this.state.socket;
        socket.emit(USER_CONNECTED, user);
        this.setState({ user: user });
    }

    render() {
        const socket = this.state.socket;

        return (
            <div className="container">
                {
                    this.state.user === null ? 
                    <LoginForm socket={socket} setUser={this.setUser} /> :
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
