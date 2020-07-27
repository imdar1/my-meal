import React from 'react';
import PropTypes from 'prop-types';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import { amber } from '@material-ui/core/colors';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/favoriteMealsActions';

export class StarButton extends React.Component {
    setMealToFavorite = () => {
        this.props.actions.setMealToFavorite(this.props.meal)
    }

    unsetMealFromFavorite = () => {
        this.props.actions.unsetMealFromFavorite(this.props.meal)
    }

    getMealStatus = () => {
        let currId = this.props.meal.id;
        if (this.props.favoriteMeals === undefined || this.props.favoriteMeals.length == 0) {
            return false;
        }
        let meal = this.props.favoriteMeals.filter(currMeal => currMeal.id === currId)
        if (meal === undefined || meal.length == 0) {
            return false;
        }
        return true;
    }

    handleFavoriteClick = () => {
        let currStatus = this.getMealStatus();
        if (currStatus) {
            this.unsetMealFromFavorite();
        } else {
            this.setMealToFavorite();
        }
    }

    render() {
        return (
            <IconButton onClick={ this.handleFavoriteClick } aria-label="favorite">
                { this.getMealStatus() ? <StarIcon style={{ color: amber[500] }} /> : <StarBorderIcon /> }
            </IconButton>
        )
    }
}

StarButton.propTypes = {
    actions: PropTypes.object.isRequired,
    meal: PropTypes.object.isRequired,
    favoriteMeals: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        favoriteMeals: state.favoriteMeals,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StarButton);