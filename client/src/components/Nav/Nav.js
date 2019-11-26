import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => {
  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <button className="btn">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            All Articles
          </Link>
        </button>
      </li>
      <li className="nav-item">
        <button className="btn">
          <Link to="/saved" style={{ textDecoration: "none", color: "white" }}>
            Saved Articles
          </Link>
        </button>
      </li>
      <li className="nav-item">
        <button
          className="btn"
          onClick={props.scrapeArticles}
        >
          Scrape
        </button>
      </li>
      {/* <li className="nav-item">
        <button
          className="btn"
          onClick={props.clearArticles}
        >
          Clear
        </button>
      </li> */}
    </ul>
  );
};

export { Nav };
