import React, { Fragment, useEffect, useState } from 'react';

import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import ListItemContent from './custom/ListItemContent';

import { filterMeals } from '../apis/Meal';


const FilterPage = () => {
    const [filterBy, setFilterBy] = useState('c');
    const [mealData, setMealData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query !== '') {
            const fetchMeal = async () => {
                let params = {};
                params[filterBy] = query;
                filterMeals(params)
                    .then(res => {
                        const { meals } = res;
                        if ( meals !== null && meals !== undefined) {
                            const mealList = meals.map(item => ({
                                id: item["idMeal"],
                                name: item["strMeal"],
                                image: item["strMealThumb"],
                            }));
                            setMealData(mealList);
                        } else {
                            setMealData([])
                        }
                    })
                    .catch(err => {
                        console.log('Error:', err);
                    });
            };
            fetchMeal();
        }
    }, [query])

    return (
        <div className="max-w-screen-md mx-auto p-4 mt-6">
            <div className="ml-6 pt-1">
                <h1 className="text-2xl text-orange-600 leading-tight">
                    Filter Meal
                </h1>
            </div>
            <div className="mx-6 my-4 pt-1">
                <FormControl variant="outlined" className="w-1/3">
                    <InputLabel htmlFor="filter-select">Filter by</InputLabel>
                    <Select
                        native
                        defaultValue={"c"}
                        inputProps={{
                            name: 'name',
                            id: 'filter-select',
                        }}
                        label="Filter by"
                        onChange={ (e) => setFilterBy(e.target.value) }
                    >
                        <option value={"c"}>Category</option>
                        <option value={"a"}>Area</option>
                        <option value={"i"}>Ingredient</option>
                    </Select>
                </FormControl>
                <div className="inline-flex pl-4 w-2/3">
                    <FormControl className="w-full">
                        <TextField 
                            id="filter-query"
                            label="Query"
                            variant="outlined"
                            onChange={ (e) => setQuery(e.target.value) }
                        />
                    </FormControl>
                </div>
            </div>
            <div className="mx-6 pt-1">
                <List>
                    {mealData.map(row => (
                        <Fragment key={row.id}>
                            <ListItemContent meal={row} />
                            <Divider variant="inset" component="li" />
                        </Fragment>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default FilterPage;
