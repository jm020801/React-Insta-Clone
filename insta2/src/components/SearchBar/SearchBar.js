import React, { Component } from "react";
import "./SearchBar.css";
const SearchBar = props => {
  return (
    <div className="search-bar-container">
      <div className="logo-and-text">
        <i class="fab fa-instagram" />
        <h1 className="logo-text">Instagram</h1>
      </div>
      <div>
        <form onSubmit={props.filterComments} class="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search.."
            name="search"
            value={props.filterInput}
            onChange={props.changeFilterInputs}
          />
        </form>{" "}
      </div>
      <div className="icons">
        <i class="far fa-compass" />
        <i class="far fa-heart" />
        <i class="far fa-user" />
      </div>
    </div>
  );
};
export default SearchBar;
