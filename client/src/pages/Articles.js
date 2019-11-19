import React, { Component } from "react";
import API from "../utils/API";

class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getArtNews();
  }

  getArtNews = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.articles.map(article => (
          <div key={article._id}>
            <h1>{article.title}</h1>
            <img
              src={
                article.image
                  ? article.image
                  : "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png"
              }
              alt={article.title}
            />
            <p>{article.link}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Articles;
