import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import WantToCooks from "../WantToCooks/WantToCooks";
const Recipes = ({handleCookButton}) => {
    
    const[recipies, setRecipes] = useState([])

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data =>setRecipes(data))
    })

    const handleRemove = (id) => {
        console.log(id)
        // const removeItem = recipies.filter((item) => item.recipe_id != id);
        // setRecipies(removeItem);
      };
    
    return (
        <div className="w-2/3 grid grid-cols-2">
            {
                recipies.map((recipe, idx) => <Recipe
                key={idx}
                recipe ={recipe}
                handleCookButton = {handleCookButton}
                handleRemove = {handleRemove}
                ></Recipe>)
            }
        </div>
    );
};

export default Recipes;