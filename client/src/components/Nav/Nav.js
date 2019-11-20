import React from "react";

const Nav = () => {
  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <a className="nav-link" href="#">
          All ARTicles
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Saved ARTicles
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Scrape ARTicles
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Clear ARTicles
        </a>
      </li>
    </ul>
  );
};

export { Nav };

