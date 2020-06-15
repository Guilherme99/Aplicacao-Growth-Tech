import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home/index';
import Posts from './pages/Posts/index';
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/posts/:id" component={Posts} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;