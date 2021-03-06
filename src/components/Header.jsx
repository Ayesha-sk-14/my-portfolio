import React from "react";
import {Link} from "react-router-dom";


function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav ms-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Aboutme">about me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">contact me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;