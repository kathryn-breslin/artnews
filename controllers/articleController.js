const db = require("../models");
var axios = require("axios");
var cheerio = require('cheerio');

module.exports = {
  scrape: function(req, res) {
    axios.get("http://www.artnews.com/").then(function(response) {
      var $ = cheerio.load(response.data);
    
      $(".story").each(function(i, element) {
        var results = {};

        var text = $(element).find("a").text();
        var split = text.split('width="')
        var image = $(element).find(".lrv-a-crop-2x3").text()
        var imageSplit = image.split("src=")
        results.title = split[1]
        results.link = $(element)
          .find("a")
          .attr("href");
        results.image = imageSplit[1]
          console.log(results)
          db.Article.create(results).then(function(dbModel){
              console.log(dbModel)
          })
          .catch(function(err) {
              console.log(err)
          })
      });
    });
  },
  findAll: function(req, res) {
    db.Article.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Article.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    db.Article.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article.findOneAndUpdate({ _id: req.params.id }, { $set: { saved: true } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article.findById({ _id: req.params.id }, req.body)
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
