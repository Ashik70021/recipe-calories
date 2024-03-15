import './App.css'
import Banner from './Component/Banner/Banner'
import Header from './Component/Header/Header'
import Ourrecipes from './Component/OurRecipes/Ourrecipes'
import Recipes from './Component/Recipes/Recipes'

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Ourrecipes></Ourrecipes>
      <div>
        <Recipes></Recipes>
      </div>
    </>
  )
}

export default App
