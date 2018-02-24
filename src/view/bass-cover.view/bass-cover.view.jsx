import * as React from 'react';
import './bass-cover.style.scss';
import { HeaderSecondary, Pagelogo } from '../../components';

const imgBass = require('../../assets/img/page_logo/logo_bass.jpg');

export class BassCoverView extends React.Component {
    constructor(props ) {
        super(props);
        this.headerConfig = ['GUITAR', 'VOCALS', 'BASS', 'DRUMS'];
        this.source = imgBass;
    }

    render() {
        return (
            <div className="home">
                <HeaderSecondary items={this.headerConfig}/>
                <Pagelogo title="Bass covers" source={this.source}/>
            </div>
        );
    }
}