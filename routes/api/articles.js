var router = require("express").Router();
const articleController = require("../../controllers/articleController");

router
  .route("/")
  .get(articleController.findAllUnsaved)
  .post(articleController.create);

router
  .route("/saved")
  .get(articleController.findSaved)

router
  .route("/scrape")
  .get(articleController.scrape)
  .post(articleController.create);

router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
