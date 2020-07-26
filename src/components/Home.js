import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import '../styles/tailwind.output.css';

import { findMealByName } from '../apis/Meal';


const Home = () => {
    const [mealName, setMealName] = useState('');
    const [mealList, setMealList] = useState([]);

    useEffect(() => {
        const fetchMeal = async () => {
            findMealByName(mealName)
                .then(res => {
                    const { meals } = res;
                    const mealList = meals.map(item => ({
                        id: item["idMeal"],
                        name: item["strMeal"],
                        category: item["strCategory"],
                        area: item["strArea"],
                        image: item["strMealThumb"],
                    }));
                    setMealList(mealList);
                })
                .catch(err => {
                    console.log('Error:', err);
                });
        };
        fetchMeal()
    }, [mealName])

    return (
        <div className="max-w-screen-md mx-auto p-4 mt-6">
            <div className="ml-6 pt-1">
                <h1 className="text-2xl text-orange-600 leading-tight">
                    My Meal
                </h1>
                <p className="text-base text-gray-700 leading-normal">Find some meals here!</p>
            </div>
            <div className="mx-6 my-4 pt-1">
                <Paper component="form" className="flex items-center px-2 py-1">
                    <InputBase
                        className="ml-1 flex-1"
                        placeholder="Search Meals"
                        inputProps={{ 'aria-label': 'search meals' }}
                        onChange={event => setMealName(event.target.value)}
                    />
                    <IconButton type="submit" className="p-5" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            <div className="mx-6 pt-1">
                <List>
                    {mealList.map(row => (
                        <Fragment key={row.id}>
                            <ListItem 
                                button key={row.id} 
                                component={Link}
                                alignItems="flex-start"
                                to= {{
                                    pathname: "/detail",
                                    mealId: row.id,
                                }}
                            >
                                <ListItemAvatar>
                                    <Avatar src={row.image} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={row.name}
                                    secondary={row.area}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                        <StarBorderIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </Fragment>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default Home;
