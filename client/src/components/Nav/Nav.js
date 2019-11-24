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
        <button onClick={props.onClick}>Scrape</button>
        {/* <Link to="" onClick={props.scrapeArticles}>Scrape Articles</Link> */}
        {/* Determine actual route being used to scrape */}
      </li>
      <li className="nav-item">
        {/* <Link to="/clear">Clear Articles</Link> */}
      </li>
    </ul>
  );
};

export { Nav };
