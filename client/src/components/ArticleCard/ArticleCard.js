import React from "react";
// import { Button } from "semantic-ui-react";

function ArticleCard(props) {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12">
    <div className="card">
      <div className="card-image">
        <img
          src={
            props.image
              ? props.image
              : "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png"
          }
          alt={props.title}
        />
      </div>
      <div className="card-content">
        <p>{props.title}</p>
      </div>
      <div className="card-action">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={props.link}
        >
          ARTicle
        </a>
        <a onClick={props.onClick}>
          Saved
        </a>
          {/* <Button className="ui inverted red button" icon="heart outline" onClick={props.onClick}/> */}
      </div>
    </div>
  </div>
  );
}

export { ArticleCard };