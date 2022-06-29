import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-info" type="submit">Search</button>
                    </form> */}

                    {/* Changing color of switch label based on the value od prop mode*/}
                    <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            {/* Here we are using JS to dynamically change the label text based on prop passed */}
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode} Mode`}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set tittle here",
    aboutText: "Set about text here"
}