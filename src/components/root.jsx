import * as React from 'react';
import { VERIFY_USER, USER_CONNECTED } from '../services/events';

import { Header, Sidebar, LoginForm } from './';

import { connect } from 'react-redux';
import { getUser, setSocket } from '../store/actions/verify.actions';

import './root.scss';

const url = 'http://localhost:3231';
const io = require('socket.io-client');

export class RootComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
        
        this.props.setSocket(socket);
    }

    render() {
        return (
            <div className="container">
                {
                    this.props.user === null? 
                    <LoginForm /> :
                    <div className="app">
                        <Header />
                        <div className="main-content">
                            <Sidebar/>
                        </div>                
                    </div> 
                }
            </div>
            
        );
    }
}

const mapToStateProps = (state) => {
    let user = state.verifyUser.user;
    let socket = state.socketApp.socket;
    return{
        user,
        socket
    };
}

const mapDispatchToProps = (dispatch) =>({
    setSocket: (socket) => {
        dispatch(setSocket(socket))
    }  
});

export const Root= connect(mapToStateProps, mapDispatchToProps)(RootComponent);
