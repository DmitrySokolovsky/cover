import * as React from 'react';
import { Search, Usernav } from '../';
import './header.scss';

import { IHeaderProps, IHeaderState } from './header.model';

const logo = require('../../assets/img/logo.png');

export class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
    }

    public render(): JSX.Element {
        const socket: {} = this.props.socket;

        return (
            <header className="header">
                <div className="header__logo">
                    7<span className="header__logo--red">ZONE</span>
                </div>                
                <Search />
                <Usernav socket={socket}/>
            </header>
        );
    }
}
