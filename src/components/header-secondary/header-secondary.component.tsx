import * as React from 'react';
import './header-secondary.model';
import './header-secondary.style.scss';
import { IHeaderSecondaryProps, IHeaderSecondaryState } from './header-secondary.model';

export class HeaderSecondary extends React.Component<IHeaderSecondaryProps, IHeaderSecondaryState> {
    constructor(props: IHeaderSecondaryProps) {
        super(props);
    }

    public render(): JSX.Element {
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