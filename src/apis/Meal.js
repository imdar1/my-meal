import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const findMealByName = (name) => {
    new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            baseURL: BASE_URL,
            url: '/search.php',
            withCredentials: true,
            params: {
                s: name,
            },
        })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const getMealDetailById = (mealId) => {
    new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            baseURL: BASE_URL,
            url: '/lookup.php',
            withCredentials: true,
            params: {
                i: mealId,
            },
        })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export { findMealByName, getMealDetailById };
