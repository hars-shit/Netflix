import React from "react";
import logo from '../assets/net.png';
import '../styles/App.scss';
import { Link } from "react-router-dom";
import {ImSearch} from 'react-icons/im'

function Header(){
    return(
        <nav className="header ba">
                <img src={logo} alt="" />

                <div className="nav-element">
                    <Link to="/TvShows">TV Shows</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/Top-Rated">Top Rated</Link>
                    <Link to="/Popular">Popular</Link>
                </div>
                <ImSearch id="search"/>
        </nav>
     
    )
}
export default Header;