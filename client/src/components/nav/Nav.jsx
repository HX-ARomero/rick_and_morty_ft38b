import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../../assets/rick-and-morty-01.png";
import SearchBar from "../searchBar/SearchBar.jsx";

export default function Nav(props) {
    return(
        <div className={styles.container}>
            <div>
                <NavLink to="/introduction">
                    <img src={logo} alt="Rick and Morty" />
                </NavLink>
            </div>
            <div>
                <NavLink to="/home">
                    <button>Home</button>
                </NavLink>
                <NavLink to="/favorites">
                    <button>Favorites</button>
                </NavLink>
                <NavLink to="/about">
                    <button>About</button>
                </NavLink>
            </div>
            <div>
                <SearchBar onSearch={props.onSearch} />
            </div>
        </div>
    )
}