import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';

import Root from './root';
import configureStore from './configure-store';

const CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

if (typeof window !== 'undefined') {
    window.__main = (state) => {
        const history = CAN_USE_DOM
        ? createBrowserHistory({
            basename: (state.settings && state.settings.contextRoot) || ''
        })
        : null;
        const store = configureStore(state, history);
        ReactDOM.render(<Root store={ store } history={ history } />, document.getElementById('root'));

    };
}


