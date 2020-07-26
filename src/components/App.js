import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutPage from './AboutPage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import CustomNavbar from './custom/CustomNavbar';
import Home from './Home';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
    render() {
        const activeStyle = { color: 'blue' };
        return (
            <div>
                <CustomNavbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/fuel-savings" component={FuelSavingsPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

/* <div>
<NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
{' | '}
<NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
{' | '}
<NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
</div> */

App.propTypes = {
    children: PropTypes.element,
};

export default hot(module)(App);
