import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ingredients from './cooking/Ingredients'
import Profile from './cooking/Profile'
import ListRecipeChicken from './cooking/ListRecipeChicken'
import ListRecipeBeef from './cooking/ListRecipeBeef'
import Recipe from './cooking/Recipe'
import About from './cooking/About'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/Ingredients' element={<Ingredients />} />
          <Route path='/Ingredients/Profile' element={<Profile />} />
          <Route path='/Ingredients/About' element={<About />} />
          <Route path='/Ingredients/ListRecipeChicken' element={<ListRecipeChicken />} />
          <Route path='/Ingredients/ListRecipeBeef' element={<ListRecipeBeef />} />
          <Route path='/Ingredients/:id' element={<Recipe />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}