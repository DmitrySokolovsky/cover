import * as React from 'react';
import './search.scss';
var sprite = require('../../assets/img/sprite.svg');

export class Search extends React.Component {
    constructor(props: {}) {
        super (props);
    }

    public render(): JSX.Element {
        return (
            <div className="search__container">
                <input type="text" name="text-box" className="search" placeholder="search"/>
                <button className="search__button">
                    <svg className="search__logo">
                        <use xlinkHref={sprite + "#icon-search"}/>
                    </svg>
                </button>
            </div>
        );
    }
}
