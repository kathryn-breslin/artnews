import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <Link to="/">All Articles</Link>
      </li>
      <li className="nav-item">
        <Link to="/saved">Saved Articles</Link>
      </li>
      <li className="nav-item">
        <button onClick={props.scrapeArticles}>Scrape</button>
      </li>
      <li className="nav-item">
      <button onClick={props.clearArticles}>Clear</button>
      </li>
    </ul>
  );
};

export { Nav };
