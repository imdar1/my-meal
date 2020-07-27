import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutPage from './AboutPage';
import MealDetailPage from './MealDetailPage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import FavoriteMealsPage from './containers/FavoriteMealsPage';
import CustomNavbar from './custom/CustomNavbar';
import HomePage from './HomePage';
import FilterPage from './FilterPage';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import '../styles/tailwind.output.css';

const theme = createMuiTheme({
    typography: {
        fontFamily: "inherit",
    }
});

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
    render() {
        const activeStyle = { color: 'blue' };
        return (
            <ThemeProvider theme={theme}>
                <CustomNavbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/fuel-savings" component={FuelSavingsPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/favorites" component={FavoriteMealsPage} />
                    <Route path="/detail" component={MealDetailPage} />
                    <Route path="/filter" component={FilterPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </ThemeProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
};

export default hot(module)(App);
