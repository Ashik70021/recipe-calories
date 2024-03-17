import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      toast.error("Selected item already exists");
    }
  }

  const handleRemove = (id) => {
    const removeItem = recipies.filter((item) => item.recipe_id != id.recipe_id);
    setRecipies(removeItem);
  };


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Ourrecipes></Ourrecipes>
      <div className='md:flex justify-between'>
        <Recipes handleCookButton={handleCookButton}
        ></Recipes>
        <WantToCooks recipies={recipies} handleRemove={handleRemove}></WantToCooks>
        <ToastContainer />
      </div>
    </>
  )
}

export default App