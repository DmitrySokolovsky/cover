import * as React from 'react';
import { VERIFY_USER } from '../../services/events';

import './loginform.style.scss';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const socket = this.props.socket;
        const { name, password } = this.state;
        console.log(name + " " + password);
        socket.emit(VERIFY_USER, name, password, this.setUser);
    }

    handleNameChange = (e) => {
        this.setState({ name: e.currentTarget.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.currentTarget.value });
    }

    setUser = (user) => {
        const { name, password } = this.state;
        if(user) {
            this.props.setUser({ user });
        } else {
            console.log('damned');
        }
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
                        <p className="login-form__option">Register</p>
                        <p className="login-form__option">Forgot password?</p>
                    </div>
                </form>
            </div>
        );
    }
}