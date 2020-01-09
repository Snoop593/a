import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import routes from './routes';


const defaultProps = {
    history: null
};

const Root = ({ store, history }) => (
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            { routes }
        </ConnectedRouter>
    </Provider>
);

Root.defaultProps = defaultProps;

export default Root;