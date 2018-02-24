import * as React from 'react';
import './header-secondary.style.scss';

export class HeaderSecondary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-secondary">
                <nav className="header-secondary__nav">
                    {this.props.items.map((item,index)=> {
                        return (
                            <div className="header-secondary__item" key={item+index}>{item}</div>
                        );
                    })}
                </nav>
            </div>
        );
    }
}