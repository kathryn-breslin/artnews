import React, { Component } from "react";
import { SavedCard, Jumbotron, Nav } from "../../components";
import API from "../../utils/API";
import "./Saved.css";
class Saved extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount() {
    this.getArtNews();
  }

  getArtNews = () => {
    API.getArticles().then(res => this.setState({ savedArticles: res.data }));
  };

  deleteArticle = id => {
    const saved = this.state.savedArticles.find(saved => saved._id === id);

    API.deleteArticle(saved._id)
      .then(res => this.getArtNews())
      .catch(err => console.log(err));
  };

  render() {
    const { savedArticles } = this.state;
    return (
      <div>
        <Jumbotron />
        <div className="container">
          <Nav />
          <div className="row">
            <div className="col-12">
              <h1 id="title">saved articles.</h1>
              <p id="titleText">read articles you saved from <a target="_blank" href="https://www.artnews.com/">artnews.com</a>.</p>
            </div>
          </div>
          <div className="row">
            {console.log(savedArticles)}
            {savedArticles.map(saved => {
              if (saved.saved === true) {
                return (
                  <>
                    <SavedCard
                      key={saved._id}
                      id={saved._id}
                      image={saved.image}
                      title={saved.title}
                      link={saved.link}
                      deleteArticle={() => this.deleteArticle(saved._id)}
                    />
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;
