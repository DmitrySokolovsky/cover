import * as React from 'react';
import { VERIFY_USER, USER_CONNECTED } from '../services/events';

import { Header, Sidebar, LoginForm } from './';

import { connect } from 'react-redux';
import { getUser } from '../store/actions/verify.actions';

import './root.scss';

const url = 'http://localhost:3231';
const io = require('socket.io-client');

export class RootComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
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

        console.log(this.state);

        console.log(this.props);
        
        this.setState({ socket: socket });
    }

    setUser = (user) => {
        this.setState({ user: user});
        console.log(user);
    }

    render() {
        const socket = this.state.socket;

        return (
            <div className="container">
                {
                    this.props.user === null? 
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

const mapToStateProps = (state) => {
    let user = state.verifyUser.user;
    return{
        user
    };
}

const mapDispatchToProps = (dispatch) =>({
    getUser: (user)=> {
        dispatch(getUser(user))
    }    
});

export const Root= connect(mapToStateProps, mapDispatchToProps)(RootComponent);
