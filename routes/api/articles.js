var router = require("express").Router();
const articleController = require("../../controllers/articleController");

router
  .route("/")
  .get(articleController.findAll)
  .post(articleController.create);

router
.route("/scrape")
.get(articleController.scrape)
.post(articleController.create);

router.route("/:id").delete(articleController.remove);

module.exports = router;
