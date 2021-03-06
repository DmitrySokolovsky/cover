import * as React from 'react';
import './sidebar.scss';

export class Sidebar extends React.Component {
    sidebarItems;

    constructor(props) {
        super(props);  
        this.sidebarItems = ['my profile', 'news', 'covers', 'gear', 'tabs', 'music'];          
    }

    render() {
        return (
            <aside className="sidebar">
                <nav className="sidebar__nav">
                    {this.sidebarItems.map((item,index)=> {
                        return (
                            <div className="sidebar__item" key={item+index}>{item}</div>
                        );
                    })}
                </nav>
            </aside>
        );
    }
}