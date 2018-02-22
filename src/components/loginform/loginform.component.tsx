import * as React from 'react';
import { ILoginFormProps, IloginFormState } from './loginform.model';
import './loginform.style.scss';

export class LoginForm extends React.Component<ILoginFormProps, IloginFormState> {
    constructor(props: ILoginFormProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="login-form">
                <div className="login-form__wrapper">
                    <div className="login-form__item">
                        <label htmlFor="password" className="login-form__label">Password</label>
                        <input type="text" id="password" className="login-form__input"/>
                    </div>
                    <div className="login-form__item">
                        <label htmlFor="name" className="login-form__label">Name</label>
                        <input type="text" id="name" className="login-form__input"/>
                    </div>  
                    <div className="login-form__item">
                        <button type="submit" className="login-form__button">Log In</button>
                    </div> 
                    <div className="login-form__item login-form__item--flex">
                        <p className="login-form__option">Register</p>
                        <p className="login-form__option">Forgot password?</p>
                    </div>
                </div>
            </div>
        );
    }
}