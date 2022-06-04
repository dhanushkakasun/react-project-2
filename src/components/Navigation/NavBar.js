function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Add Schedule</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Update Shedule</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Delete Schedule</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">View Shedule</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;