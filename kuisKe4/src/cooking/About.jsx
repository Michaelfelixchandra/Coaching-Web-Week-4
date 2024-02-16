const About = () => {
    return(
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

            <div className="container my-4">
                <div className="row justify-content-center align-items-center">
                    <h5 className="text-center m-5">About</h5>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{height: '100%'}}>
                            <img src="https://www.themealdb.com/images/category/chicken.png" style={{width:'100%'}} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="title-card">Chicken</h5>
                                <p className="text-card">Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.</p>
                            </div>                    
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{height: '100%'}}>
                            <img src="https://www.themealdb.com/images/category/beef.png" style={{width:'100%'}} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="title-card">Beef</h5>
                                <p className="text-card">Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and essential nutrients.</p>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About