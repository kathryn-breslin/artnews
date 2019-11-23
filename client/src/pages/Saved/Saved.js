import React, { Component } from "react";
import { ArticleCard, Jumbotron, Nav } from "../../components";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount() {
    this.getArtNews();
  }

  getArtNews = () => {
    API.getArticles().then(
      res => this.setState({ savedArticles: res.data })
    );
  };
  render() {
    const { savedArticles } = this.state;
    return (
      <div>
        <Jumbotron />
        <div className="container">
          <Nav />
          <div className="row">
            {console.log(savedArticles)}
            {savedArticles.map(saved => {
              if (saved.saved === true) {
                return (
                  <>
                    <ArticleCard
                      id={saved._id}
                      image={saved.image}
                      title={saved.title}
                      link={saved.link}
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
