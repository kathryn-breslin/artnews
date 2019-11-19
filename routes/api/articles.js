var router = require("express").Router();
const articleController = require("../../controllers/articleController");

router
  .route("/")
  .get(articleController.findAll)
  .post(articleController.create);

router.route("/:id")
    // .get(booksController.findById)
    // .put(booksController.update)
    .delete(articleController.remove);

module.exports = router;
