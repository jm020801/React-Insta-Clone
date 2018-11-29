import React, { Component } from "react";
import "./SearchBar.css";
import styled from 'styled-components';
import { Route, Link, Switch } from "react-router-dom";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.5%;
    align-items: center;
`;
 const LogoAndText = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    max-height: 50px;
    justify-content: space-between;
    width: 17%;
`;
 const LogoHeader = styled.div`
    font-family: billabong;
    font-size: 2rem;
    border-left: 1px solid grey;
    padding-left: 7%;
    font-weight: normal;
`;
 const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 15%;
`;

const SearchBar = props => {
  return (
    <Header>
      <LogoAndText>
        <i className="fab fa-instagram" />
        <Link to={`/`}>
          <LogoHeader>Instagram</LogoHeader>
          </Link>
        </LogoAndText>
      <div>
        <form className="search">
          <input className="search-input"
            type="text" placeholder="Search.."
            name="search"
            value={props.filterInput}
            onChange={props.filterComments}
          />
        </form>
      </div>
      <Icons>
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </Icons>
    </Header>
  )
}
export default SearchBar;
