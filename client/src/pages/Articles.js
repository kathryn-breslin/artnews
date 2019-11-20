import React, { Component } from "react";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
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
    const { articles } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m7">
            <ArticleCard>
              {articles.map(article => (
                <div className="card" key={article._id}>
                  <div className="card-image">
                    <img
                      src={
                        article.image
                          ? article.image
                          : "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png"
                      }
                      alt={article.title}
                    />
                  </div>
                  <div className="card-content">
                    <p>{article.title}</p>
                  </div>
                  <div className="card-action">
                    <a target="_blank" href={article.link}>ARTicle</a>
                  </div>
                </div>
              ))}
            </ArticleCard>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
