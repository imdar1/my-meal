import { SET_FAVORITE, UNSET_FAVORITE } from '../constants/actionTypes';

export function setMealToFavorite(settings) {
    return function(dispatch) {
        return dispatch({
            type: SET_FAVORITE,
            payload: settings,
        });
    };
};

export function unsetMealFromFavorite(settings) {
    return function(dispatch) {
        return dispatch({
            type: UNSET_FAVORITE,
            payload: settings,
        });
    };
};