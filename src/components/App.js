import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MealDetailPage from './MealDetailPage';
import FavoriteMealsPage from './containers/FavoriteMealsPage';
import HomePage from './HomePage';
import FilterPage from './FilterPage';
import NotFoundPage from './NotFoundPage';
import CustomNavbar from './custom/CustomNavbar';
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
        return (
            <ThemeProvider theme={theme}>
                <CustomNavbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
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
