const { Router } = require("express");
const router = Router();
const updateAverageRating = require("../controllers/updatedRateCasas");
const newRateCasas = require("../controllers/newRateCasas");

router.get("/:id", updateAverageRating);
router.post("/", newRateCasas);



module.exports = router;
