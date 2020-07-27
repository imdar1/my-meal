import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';
import StarButton from './containers/StarButton';

import { getMealDetailById } from '../apis/Meal';
import { parseIngredients } from '../utils/parseIngredients';

const MealDetailPage = (props) => {
    const mealId = props.location.mealId;
    const [mealData, setMealData] = useState({
        id:'', name:'', category:'', area:'', image:'', tags:'', instructions:'', ingredients:[], 
    });
    const [mealStored, setMealStored] = useState({
        id:'', name:'', image:'',
    })

    useEffect(() => {
        const fetchMealDetail = async () => {
            getMealDetailById(mealId)
                .then(res => {
                    const { meals } = res;
                    if ( meals !== null && meals !== undefined ) {
                        const item = meals[0];
                        const ingredients = parseIngredients(item);
                        const meal = {
                            id: item["idMeal"],
                            name: item["strMeal"],
                            category: item["strCategory"],
                            area: item["strArea"],
                            image: item["strMealThumb"],
                            tags: item["strTags"],
                            instructions: item["strInstructions"],
                            ingredients: ingredients,
                        };
                        const mealStored = {
                            id: item["idMeal"],
                            name: item["strMeal"],
                            image: item["strMealThumb"],
                        }
                        setMealData(meal);
                        setMealStored(mealStored);
                    } else {
                        setMealData({
                            id:'', name:'', category:'', area:'', image:'', tags:'', instructions:'', ingredients:[], 
                        });
                        setMealStored({
                            id:'', name:'', image:'',
                        })   
                    }
                })
                .catch(err => {
                    console.log('Error:', err);
                });
        };
        fetchMealDetail()
    }, [mealId])

    if (typeof(mealId) === 'undefined' || mealId == null) {
        return <></>;
    }
    return (
        <div>
            <Typography variant="h4" className="p-2 mt-6 text-center">
                { mealData.name }
            </Typography>
            <div className="grid grid-cols-6 gap-4 p-4 mt-4">
                <div className="col-span-2">
                    <img className="object-contain h-64 w-full" src={ mealData.image } />
                </div>
                <div className="col-span-4 flex content-center flex-wrap items-center">
                    <div className="w-full p-2">
                        <Typography variant="h6" className="text-left">
                            Category: { mealData.category }
                        </Typography>
                    </div>
                    <div className="w-full p-2">
                        <Typography variant="h6" className="text-left">
                            Area: { mealData.area }
                        </Typography>
                    </div>
                    <div className="w-full p-2">
                        <Typography variant="h6" className="text-left">
                            Tags: { mealData.tags === null ? '-' : mealData.tags }
                        </Typography>
                    </div>
                    <div className="w-full p-2">
                        <Typography variant="h6" component="span" className="text-left">
                            Favorite: 
                        </Typography>
                        <StarButton meal={ mealStored } />
                    </div>
                </div>
            </div>
            <div className="gap-4 p-4 mt-4 ml-6">
                <Typography variant="h6" className="text-left">
                    Ingredients:
                </Typography>
                {mealData.ingredients.map((row, index) => (
                    <Typography key={ index } variant="body1" className="text-left">
                        { row }
                    </Typography>
                ))}
            </div>
            <div className="gap-4 p-4 mt-4 ml-6">
                <Typography variant="h6" className="text-left">
                    Instructions:
                </Typography>
                <Typography variant="body1" className="text-left">
                    { mealData.instructions }
                </Typography>
            </div>
        </div>
    );
};

export default MealDetailPage;
