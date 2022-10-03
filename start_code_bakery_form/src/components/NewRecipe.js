

import { useState } from "react";

const NewRecipe = ({onSubmit})=> {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState(0);

    const handleCakeNameChange = (event) => {
        setCakeName(event.target.value);
        
    }

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        
        const newRecipe = {
            cakeName: cakeName,
            ingredients: ingredients,
            rating: rating
        }
        
        setCakeName("");
        setIngredients("");
        setRating("");
        onSubmit(newRecipe);
    }



    return (
        <form onSubmit={handleFormSubmission}>
            <label htmlFor="cakename">cakeName:</label>
            <input 
                type="text" 
                id="name"
                onChange={handleCakeNameChange}
                value={cakeName}
            />
            <label htmlFor="ingredients">ingredients:</label>
            <input 
                type="text"
                id="ingredients" 
                onChange={handleIngredientsChange}
                value={ingredients}
            />
            <label htmlFor="rating">Rating:</label>
            <input 
                type="number" 
                id="rating"
                onChange={handleRatingChange}
                value={rating}
            />
            <input type="submit" value="Add Cake Recipe"/>
        </form>
    );
}

export default NewRecipe;