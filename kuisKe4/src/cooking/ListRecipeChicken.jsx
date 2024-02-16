import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ListRecipeChicken = () => {
    const navigate = useNavigate()

    const [chicken, setChicken] = useState([])
    const fetchData = async () => {
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken')
    setChicken(res.data.meals)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return(
      <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">API Kitchen</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/Ingredients">Ingredients</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/Ingredients/About">About</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/Ingredients/Profile">Profile</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
            <div className='d-flex flex-wrap justify-content-center gap-4 my-4'>
                  {chicken.map((meals, index) => (
                    <div key={index} onClick={() => navigate('/Ingredients/' + meals.idMeal)} role='button'>
                        <div class="card h-50" style={{ width: '18rem' }}>
                          <img src={meals.strMealThumb} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title text-center"><i class="bi bi-1-circle-fill"></i>{meals.strMeal}</h5>
                          </div>
                        </div>
                    </div>
      ))}
      </div>
      </>
    )
}
export default ListRecipeChicken