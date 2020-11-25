import React from 'react';
import '../index.css';
import {NavLink} from 'react-router-dom';
import Me from '../Pics/me.jpg'

export default function NavBar (){
    return(
        <>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink exact className="navbar-brand" to="/"><img src={Me} alt="" className="avatar"/>Khoa Henry Nguyen</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink activeClassName='menu-active' className="navbar-a" aria-current="page" exact to="/" >Home</NavLink > 
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='menu-active' className="navbar-a" to="/about" >About</NavLink >
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='menu-active' className="navbar-a" aria-current="page" to="/projects" >Projects</NavLink >
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='menu-active' className="navbar-a" to="/contact">Contact</NavLink >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                    </div>
                </div>
            </div>
        </>
    )
}