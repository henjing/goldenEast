import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import exampleOneContainer from './components/containers/example-1-container';
import exampleTwoContainer from './components/containers/example-2-container';

// Layouts
import MainLayout from './components/layouts/main-layout';
// Route base
import { routeBase } from './appConstants/urlConfig';


export default (
    <Router history={browserHistory}>
        <Route path={routeBase} component={MainLayout} >

            <IndexRedirect to={routeBase + 'example_1'} />
            <Route path={routeBase + 'example_1'} component={exampleOneContainer} />
            
            <Route path={routeBase + 'example_2'} component={exampleTwoContainer} />
            
        </Route>
    </Router>
)
