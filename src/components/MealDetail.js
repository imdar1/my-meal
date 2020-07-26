import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { getMealDetailById } from '../apis/Meal';

const parseIngredients = (item) => {
    let ingredients = [];
    for (let i=1; i<=20 && item["strIngredient"+i] !== ''  && item["strIngredient"+i] !== null ; i++) {
        let measure = item["strMeasure"+i];
        let currIngredient = i + ". ";
        if (measure !== '' || measure !== null) {
            currIngredient += measure + ' ';
        }

        currIngredient += item["strIngredient"+i];
        ingredients.push(currIngredient);
    }
    return ingredients;
}

const MealDetail = (props) => {
    const mealId = props.location.mealId;
    const [mealData, setMealData] = useState({
        name:'', category:'', area:'', image:'', tags:'', instructions:'', ingredients:[], 
    });

    useEffect(() => {
        console.log('Mealid',mealId);
        const fetchMealDetail = async () => {
            getMealDetailById(mealId)
                .then(res => {
                    const { meals } = res;
                    const item = meals[0];
                    const ingredients = parseIngredients(item);
                    const meal = {
                        name: item["strMeal"],
                        category: item["strCategory"],
                        area: item["strArea"],
                        image: item["strMealThumb"],
                        tags: item["strTags"],
                        instructions: item["strInstructions"],
                        ingredients: ingredients,
                    };
                    console.log(meal)
                    setMealData(meal);
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
                            Tags: { mealData.tags }
                        </Typography>
                    </div>
                    <div className="w-full p-2">
                        <Typography variant="h6" component="span" className="text-left">
                            Favorite: 
                        </Typography>
                        <IconButton aria-label="favorite">
                            <StarBorderIcon  />
                        </IconButton>
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

export default MealDetail;