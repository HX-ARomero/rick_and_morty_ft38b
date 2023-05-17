import React from "react";
import SearchBar from "../searchBar/SearchBar.jsx";

export default function Nav(props) {
    return(
        <div>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}