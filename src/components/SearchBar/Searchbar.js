import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    return (

        <nav className="navbar  justify-content-center">
            <h5>Search For an Employee</h5>
            <form className="form-inline m-2" onSubmit={props.handleFormSubmit}>
                <input
                    className="form-control"
                    value={props.value}
                    name="search"
                    onChange={props.handleInputChange}
                    type="search"
                    placeholder="Search for Employee"
                />
            </form>
        </nav>

    );
};

export default SearchBar;