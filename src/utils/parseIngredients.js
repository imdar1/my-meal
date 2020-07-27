export function parseIngredients(item) {
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