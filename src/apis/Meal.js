import axios from 'axios';
import { BASE_URL } from '../constants/api';

const findMealByName = (name) => new Promise((resolve, reject) => {
    axios({
        method: 'GET',
        baseURL: BASE_URL,
        url: '/search.php',
        params: {
            s: name,
        },
    })
        .then(({ data }) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        });
});

const getMealDetailById = (mealId) => new Promise((resolve, reject) => {
    axios({
        method: 'GET',
        baseURL: BASE_URL,
        url: '/lookup.php',
        params: {
            i: mealId,
        },
    })
        .then(({ data }) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        });
});

const filterMeals = (params) => new Promise ((resolve, reject) => {
    axios({
        method: 'GET',
        baseURL: BASE_URL,
        url:'/filter.php',
        params: params,
    })
        .then(({data}) => {
            resolve(data);
        })
        .catch((err) => {
            reject(err);
        })
});

export { findMealByName, getMealDetailById, filterMeals };
