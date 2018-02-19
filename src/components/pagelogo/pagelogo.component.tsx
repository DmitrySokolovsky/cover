import * as React from 'react';
import './pagelogo.style.scss';
import { IPagelogoProps, IPagelogoState } from './pagelogo.model';

export class Pagelogo extends React.Component<IPagelogoProps, IPagelogoState> {
    styles: {};
    constructor(props: IPagelogoProps) {
        super(props);
        this.styles = {
            backgroundImage: 'url('+this.props.source+')'
        };
    } 

    public render(): JSX.Element {
        return (
            <div className="page-logo__wrapper">
                <div className="page-logo" style={this.styles}>
                    <h1 className="page-logo__title">{this.props.title}</h1>
                </div>
            </div>
        );
    }
}