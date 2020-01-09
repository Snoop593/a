import React from 'react'
import { Route, Switch } from 'react-router-dom';

import App from './components/app/app';
import A from './containers/a';

const WrappedComponent = (Component, props) => (
    <App>
        <Component { ...props } />
    </App>
);

export default (
    <Switch>
        <Route
            exact={ true }
            path='/'
            render={ props => WrappedComponent(A, props) }
        />
    </Switch>
);
