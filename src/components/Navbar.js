import React from 'react'
import PropTypes from 'prop-types'        // PropTypes are used to define the definition of the props used
import { Link } from 'react-router-dom';  // used in router to navigate between pages without loading

export default function Navbar(props) {
    return (
        // props cannot be changed i.e. props are read only.
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* {} is template literal and its used when we want to write javascript */}
            {/* $ specifies that we can use variable here */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* Now instead of link and to we will use a and href then it will work but page will reload */}
                {/* This props.title is rendered from the app.js navbar calling component */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        {/* This is the toggle button ans When on click event is envoked then the toggle mode function of the app.js in called */}
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}      //This defines the definition of the props used in our component

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };   //This is used when nothing is passed as props