import * as React from 'react';
import { Search, Usernav } from '../';
import './header.scss';
import { USER_CONNECTED } from '../../services/events';

const logo = require('../../assets/img/logo.png');

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
    }

    componentDidMount() {

    }

    render() {
        const socket = this.props.socket;
        const username = this.state.userName;

        return (
            <header className="header">
                <div className="header__logo">
                    7<span className="header__logo--red">ZONE</span>
                </div>                
                <Search />
                <Usernav username={username}/>
            </header>
        );
    }
}
