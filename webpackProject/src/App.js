import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js');
});

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> |
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                <Route path="/pizza" component={AsyncPizza} />
                    <Route path="/" exact component={Users} />
                   
                </div>
            </div>
        );
    }
}

export default App;