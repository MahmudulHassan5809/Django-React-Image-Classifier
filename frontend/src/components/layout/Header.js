import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Image Classifier</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                           <Link to="/" className="nav-link">Home</Link>
                           <Link to="/images" className="nav-link">Image List</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Header;
