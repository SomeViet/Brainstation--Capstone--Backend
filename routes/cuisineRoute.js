const router = require("express").Router();
const cuisineController = require("../controllers/cuisineController");

router.route("/").get(cuisineController.index);

module.exports = router;
