 import React from 'react';
 import { Link } from "react-router-dom";

const Layout =  () => (

        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
               TodoGame | Chile
            </a>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link exact to={"/Agregar/"} className="nav-link">
                    Agregar reseña
                </Link>
                </li>
            </div>
        </nav>
);

export default Layout;
