import React, { Component } from "react";
import { ArticleCard, Jumbotron, Nav } from "../components";
import API from "../utils/API";
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

  saveBookToDB = (id) => {
    const article = this.state.articles.find(article => article._id === id);
    console.log(article);
    console.log("Save book!")
    // API.saveArticle({ 
    //   id: article._id,
    //   title: article.title,
    //   link: article.link,
    //   image: article.image,
    //   saved: true
    // }).then(() => {console.log("Book has been saved!")})
  }

  render() {
    const { articles } = this.state;

    return (
      <div>
      <Jumbotron />
      <div className="container">
      <Nav />

        <div className="row">
          {articles.map(article => (
            <ArticleCard
              id={article._id}
              image={article.image}
              title={article.title}
              link={article.link}
              onClick={() => this.saveBookToDB(article._id)}
            />
          ))}
        </div>
      </div>
      </div>
    );
  }
}

export default Articles;
