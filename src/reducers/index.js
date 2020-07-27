import { combineReducers } from 'redux';
import favoriteMeals from './favoriteMealsReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        favoriteMeals,
    });

export default rootReducer;
