const Profile = () => {
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

            <div className="row justify-content-center">
                <div class="card mb-3" style={{width: '50%'}}>
                    <div class="card-body">
                        <h5 class="card-title">Michael Felix Chandra</h5>
                        <p class="card-text">I'm a second semester student at MDP University. A responsible, reluctant, and able to work in a team. Have an interest in the field of website and data analysis.</p>
                        <br />
                        <p>Contact Me</p>
                        <p>Email: <a class= "link-underline link-underline-opacity-0" href="mailto:michaelfelix1567@gmail.com">michaelfelix1567@gmail.com</a></p>
                        <p>Instagram: <a class= "link-underline link-underline-opacity-0" href="https://www.instagram.com/michael_felixchandra/">michael_felixchandra</a></p>
                        <p>GitHub: <a class= "link-underline link-underline-opacity-0" href="https://github.com/Michaelfelixchandra">Michael Felix Chandra</a></p>
                        <p>Linkedin: <a class= "link-underline link-underline-opacity-0" href="https://www.linkedin.com/in/michael-felix-chandra-a4742b203/">Michael Felix Chandra</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile