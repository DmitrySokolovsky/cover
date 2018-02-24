import * as React from 'react';
import './pagelogo.style.scss';

export class Pagelogo extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            backgroundImage: 'url('+this.props.source+')'
        };
    } 

     render() {
        return (
            <div className="page-logo__wrapper">
                <div className="page-logo" style={this.styles}>
                    <h1 className="page-logo__title">{this.props.title}</h1>
                </div>
            </div>
        );
    }
}