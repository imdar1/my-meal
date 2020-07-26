import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

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

export { findMealByName, getMealDetailById };
