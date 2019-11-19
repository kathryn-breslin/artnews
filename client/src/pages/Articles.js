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
            <p>{article.link}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Articles;