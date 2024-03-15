import './App.css'
import Banner from './Component/Banner/Banner'
import Header from './Component/Header/Header'
import Ourrecipes from './Component/Ourrecipies/Ourrecipes'
import Recipes from './Component/Recipes/Recipes'
import WantToCooks from './Component/WantToCooks/WantToCooks'

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Ourrecipes></Ourrecipes>
      <div className='flex justify-between'>
        <Recipes></Recipes>
        <WantToCooks></WantToCooks>
      </div>
    </>
  )
}

export default App
