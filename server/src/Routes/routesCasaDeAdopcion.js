const { Router } = require("express");
const router = Router();
const postCasaDeAdopcion = require("../controllers/postCasaDeAdopcion");

router.post("/", async (req, res) => {
  try {
    const response = req.body;
    const casaPost = await postCasaDeAdopcion(response);
    res.status(200).json(casaPost);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

module.exports = router;
