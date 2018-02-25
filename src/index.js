import React from 'react';
import ReactDOM from 'react-dom';
import './base.scss';
import { Provider } from 'react-redux';
import { coverAppStore } from './store';

import { Root } from './components/root.jsx';

ReactDOM.render(
    <Provider store={coverAppStore}>
        <Root />
    </Provider>    
    , document.getElementById('root'));
