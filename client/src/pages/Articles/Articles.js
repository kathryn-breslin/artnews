import React, { Component } from "react";
import { ArticleCard, Jumbotron, Nav } from "../../components";
import API from "../../utils/API";
import "./Articles.css";

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

  saveBookToDB = id => {
    const article = this.state.articles.find(article => article._id === id);
    console.log(article);
    console.log("Save book!");
    API.saveArticle(article._id).then(res => {
      this.getArtNews();
    });
  };

  scrapeArticles = () => {
    API.scrape().then(res => {
      if (res) {
        console.log(res);
        console.log("Returning data");
        this.getArtNews();
      } else {
        console.log("Add error handling should no results return");
      }
    });
  };

  render() {
    const { articles } = this.state;

    return (
      <div>
        <Jumbotron />
        <div className="container">
          <Nav
            scrapeArticles={() => this.scrapeArticles()}
            clearArticles={() => this.clearArticles()}
          />
          <div className="row">
            <div className="col-12">
              <h1 id="title">all articles.</h1>
              <p id="titleText">collection of new articles from <a target="_blank" rel="noopener noreferrer" href="https://www.artnews.com/">artnews.com</a>.</p>
            </div>
          </div>

          <div className="row">
            {articles.map(article => {
              if (article.saved === false) {
                return (
                    <ArticleCard
                      key={article._id}
                      id={article._id}
                      image={article.image}
                      title={article.title}
                      link={article.link}
                      onClick={() => this.saveBookToDB(article._id)}
                    />
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
