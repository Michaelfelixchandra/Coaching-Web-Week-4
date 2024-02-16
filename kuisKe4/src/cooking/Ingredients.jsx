const Ingredients = () => {
    const linkChicken = () => {
        window.location.href = "/Ingredients/ListRecipeChicken";
        }

    const linkBeef = () => {
        window.location.href = "/Ingredients/ListRecipeBeef";
        }

return(
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position: 'fixed', top: '0', width: '100%', zIndex: '1000'}}>
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

        <div className="container">
            <div className='row'>
                <h2 className='text-center mt-4'>Choose Your Favorite Main Ingredients</h2>
                <div className='d-flex flex-wrap justify-content-center gap-4 my-4'>
                    <div className="card justify-content-center align-items-center" style={{width:'20rem'}} onClick={()=> linkChicken()}>
                        <img src="https://www.themealdb.com//images//category//chicken.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="title text-center">Chicken</h3>
                            <p class="card-text">Chicken is a type of domesticated fowl, a subspecies of the red junglefowl.</p>
                        </div>
                    </div>
                    <div className="card justify-content-center align-items-center" style={{width:'20rem'}} onClick={()=> linkBeef()}>
                        <img src="https://www.themealdb.com\/images\/category\/beef.png" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="title text-center">Beef</h3>
                            <p class="card-text">Beef is the culinary name for meat from cattle, particularly skeletal muscle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Ingredients