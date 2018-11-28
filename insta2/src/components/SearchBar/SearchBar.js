import React, { Component } from "react";
import "./SearchBar.css";

// var FuzzySearch = require("react-fuzzy-search")

const SearchBar = props => {
  return (
    <div className="search-bar-container">
      <div className="logo-and-text">
        <i className="fab fa-instagram" />
        <h1 className="logo-text">Instagram</h1>
      </div>
      <div>
        {/* <form onSubmit={props.filterComments} class="search"> */}
        <form className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search.."
            name="search"
            value={props.filterInput}
            onChange={props.filterComments}
          />
        </form>{" "}
      </div>
      <div className="icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};
export default SearchBar;
