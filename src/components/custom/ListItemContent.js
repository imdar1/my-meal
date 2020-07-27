import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import StarButton from '../containers/StarButton';

export default function ListItemContent(props) {
    return (
        <ListItem
            button
            key={props.meal.id}
            component={Link}
            alignItems="flex-start"
            to={{
                pathname: "/detail",
                mealId: props.meal.id,
            }}
        >
            <ListItemAvatar>
                <Avatar src={props.meal.image} />
            </ListItemAvatar>
            <ListItemText
                primary={props.meal.name}
            />
            <ListItemSecondaryAction>
                <StarButton meal={props.meal} />
            </ListItemSecondaryAction>
        </ListItem>
    );
}

ListItemContent.propTypes = {
    meal: PropTypes.object.isRequired,
};