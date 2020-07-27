import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ListItemContent from '../custom/ListItemContent';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/favoriteMealsActions';

export class FavoriteMealsPage extends React.Component {

    render() {
        return (
            <div className="max-w-screen-md mx-auto p-4 mt-6">
                <div className="ml-6 pt-1">
                    <h1 className="text-2xl text-orange-600 leading-tight">
                        My Favorites
                    </h1>
                </div>
                <div className="mx-6 pt-1">
                    <List>
                        {this.props.favoriteMeals.map(row => (
                            <Fragment key={row.id}>
                                <ListItemContent meal={row} />
                                <Divider variant="inset" component="li" />
                            </Fragment>
                        ))}
                    </List>
                </div>
            </div>
        );
    }
};

FavoriteMealsPage.propTypes = {
    actions: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMealsPage);