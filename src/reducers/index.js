import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import favoriteMeals from './favoriteMealsReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        fuelSavings,
        favoriteMeals,
    });

export default rootReducer;
