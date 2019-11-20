import React from "react";

function ArticleCard({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group d-flex">{children}</ul>
    </div>
  );
}

export { ArticleCard };