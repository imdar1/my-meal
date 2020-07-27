import { SET_FAVORITE, UNSET_FAVORITE } from '../constants/actionTypes';
import initialState from './initialState';

export default function favoriteMealsReducer(state = initialState.favoriteMeals, action) {
    switch (action.type) {
        case SET_FAVORITE:
            return [ ...state, action.payload];
        case UNSET_FAVORITE:
            const currId = action.payload.id;
            let newFavoriteMeals = state.filter(newState => newState.id !== currId);
            return newFavoriteMeals;
        default:
            return state;
    }
}