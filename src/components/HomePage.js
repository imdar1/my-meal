import React, { Fragment, useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CustomCircularProgress from './custom/CustomCircularProgress';

import ListItemContent from './custom/ListItemContent';

import { findMealByName } from '../apis/Meal';

const HomePage = () => {
    const [mealName, setMealName] = useState('');
    const [mealList, setMealList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMeal = async () => {
            setLoading(true);
            findMealByName(mealName)
                .then(res => {
                    const { meals } = res;
                    if ( meals !== null && meals !== undefined ) {
                        const mealList = meals.map(item => ({
                            id: item["idMeal"],
                            name: item["strMeal"],
                            image: item["strMealThumb"],
                        }));
                        setMealList(mealList);
                    } else {
                        setMealList([])
                    }
                })
                .catch(err => {
                    console.log('Error:', err);
                })
                .finally(() => {
                    setLoading(false);
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
                { loading ?
                    <div className="mt-6 flex justify-center w-full">
                        <CustomCircularProgress  color="#ffcc00" />
                    </div>
                :
                    <List>
                        {mealList.map(row => (
                            <Fragment key={row.id}>
                                <ListItemContent meal={row} />
                                <Divider variant="inset" component="li" />
                            </Fragment>
                        ))}
                    </List>
                }
            </div>
        </div>
    );
};

export default HomePage;
