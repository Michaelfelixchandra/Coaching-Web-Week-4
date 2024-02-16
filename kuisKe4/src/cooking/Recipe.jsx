import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [chicken, setChicken] = useState({});

  const fetchData = async () => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    setChicken(res.data.meals?.[0] || {});
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position: 'fixed', top: '0', width: "100%", zIndex: "1000"}}>
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
      <div class="card" style= {{maxWidth: "900px", marginTop: '90px', left: '10px'}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={chicken.strMealThumb} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-center">Recipe</h5>
              <p class="card-text">Menu: {chicken.strMeal}</p>
              <p class="card-text">Area: {chicken.strArea}</p>
              <p class="card-text">Keywords: {chicken.strTags}</p>
              <p class="card-text">Youtube: <a class= "link-underline link-underline-opacity-0" href={chicken.strYoutube}>{chicken.strYoutube}</a></p>
              <p class="card-text">Source: <a class= "link-underline link-underline-opacity-0" href={chicken.strSource}>{chicken.strSource}</a></p>
              <table class="table">
              <thead>
                <tr>
                  <th>Ingredients</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{chicken.strIngredient1}</td>
                  <td>{chicken.strMeasure1}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient2}</td>
                  <td>{chicken.strMeasure2}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient3}</td>
                  <td>{chicken.strMeasure3}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient4}</td>
                  <td>{chicken.strMeasure4}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient5}</td>
                  <td>{chicken.strMeasure5}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient6}</td>
                  <td>{chicken.strMeasure6}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient7}</td>
                  <td>{chicken.strMeasure7}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient8}</td>
                  <td>{chicken.strMeasure8}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient9}</td>
                  <td>{chicken.strMeasure9}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient10}</td>
                  <td>{chicken.strMeasure10}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient11}</td>
                  <td>{chicken.strMeasure11}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient12}</td>
                  <td>{chicken.strMeasure12}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient13}</td>
                  <td>{chicken.strMeasure13}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient14}</td>
                  <td>{chicken.strMeasure14}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient15}</td>
                  <td>{chicken.strMeasure15}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient16}</td>
                  <td>{chicken.strMeasure16}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient17}</td>
                  <td>{chicken.strMeasure17}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient18}</td>
                  <td>{chicken.strMeasure18}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient19}</td>
                  <td>{chicken.strMeasure19}</td>
                </tr>
                <tr>
                  <td>{chicken.strIngredient20}</td>
                  <td>{chicken.strMeasure20}</td>
                </tr>
              </tbody>
            </table>
              <p class="card-text">Instruction: {chicken.strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe
