import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../banner.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand text-light" href="/">Quiz-Test</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-light">
                            <li className="nav-item">
                                <Link className="nav-link text-light fs-5" aria-current="page" to="/home">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-light fs-5" to="/statistics">Statistics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light fs-5" to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='container banner mt-3'>
                <img src={banner} className="w-100" alt="banner"></img>
                <br />
                <h4 className='title'>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</h4>
            </div>
        </div>

    );
};

export default Header;