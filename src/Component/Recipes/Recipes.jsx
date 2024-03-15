import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
const Recipes = () => {
    const[recipies, setRecipes] = useState([])

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data =>setRecipes(data))
    })
    return (
        <div className="grid grid-cols-2">
            {
                recipies.map((recipe, idx) => <Recipe
                key={idx}
                recipe ={recipe}
                ></Recipe>)
            }
        </div>
    );
};

export default Recipes;