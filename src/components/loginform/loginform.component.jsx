import * as React from 'react';
import { VERIFY_USER, USER_CONNECTED } from '../../services/events';

import './loginform.style.scss';

import { connect } from 'react-redux';
import { getUser } from '../../store/actions/verify.actions';

export class LoginFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
    }

    initConnection = () => {
        const socket = this.props.socket;
        console.log(this.props);
        socket.on(USER_CONNECTED, this.setUser);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const socket = this.props.socket;
        const { name, password } = this.state;
        socket.emit(VERIFY_USER, name, password);

        socket.on(USER_CONNECTED, (data) => {
            console.log(data.name);
            this.props.getUser({name: data.name});
            console.log(this.props);
        });

        console.log(this.props);
    }

    handleNameChange = (e) => {
        this.setState({ name: e.currentTarget.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.currentTarget.value });
    }

    setUser = (user) => {
        this.props.getUser(user);
    }

    some=()=>{
        console.log(this.props);
    }
    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.handleSubmit} className="login-form__wrapper">
                    <div className="login-form__item">
                        <label htmlFor="name" className="login-form__label">Name</label>
                        <input type="text" id="name" className="login-form__input" onChange={this.handleNameChange}/>
                    </div>
                    <div className="login-form__item">
                        <label htmlFor="password" className="login-form__label">password</label>
                        <input type="text" id="password" className="login-form__input" onChange={this.handlePasswordChange}/>
                    </div>  
                    <div className="login-form__item">
                        <button className="login-form__button">Log In</button>
                    </div> 
                    <div className="login-form__item login-form__item--flex">
                        <p className="login-form__option" onClick={this.some}>Register</p>
                        <p className="login-form__option">Forgot password?</p>
                    </div>
                </form>
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

export const LoginForm = connect(mapToStateProps, mapDispatchToProps)(LoginFormComponent);