import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-white bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/create" className="nav-link">
                                    Create
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/vote" className="nav-link">
                                    Vote
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
