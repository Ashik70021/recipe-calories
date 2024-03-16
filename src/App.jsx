
import { useState } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import Header from './Component/Header/Header'
import Ourrecipes from './Component/Ourrecipies/Ourrecipes'
import Recipes from './Component/Recipes/Recipes'
import WantToCooks from './Component/WantToCooks/WantToCooks'
function App() {
  
  const[recipies, setRecipies] = useState([])

  const handleCookButton = (recipe) =>{
    const isExists = recipies.find((p) => p.recipe_id == recipe.recipe_id);
    if (!isExists) {
      setRecipies([...recipies, recipe]);
    } else {
      alert("Cart already exists");
    }
  }


  
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Ourrecipes></Ourrecipes>
      <div className='flex justify-between'>
        <Recipes handleCookButton={handleCookButton}
        ></Recipes>
        <WantToCooks recipies={recipies}></WantToCooks>
      </div>
    </>
  )
}

export default App