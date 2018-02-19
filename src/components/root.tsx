import * as React from 'react';

import { Header } from './';
import { Sidebar } from './sidebar/sidebar.component';

import './root.scss';

export class Root extends React.Component {
    constructor(props: {}) {
        super(props);
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
