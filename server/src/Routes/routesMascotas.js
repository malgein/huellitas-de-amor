const { Router } = require("express");
const router = Router();
const getPetById = require("../controllers/getPetById");
const postPetById = require("../controllers/postPetById");
const getPets = require("../controllers/getPets");
const getPetByName = require("../controllers/getPetsByName");

router.get("/", async (req, res) => {
  try {
    const allPets = await getPets();
    return res.status(200).json(allPets);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});
//http://localhost:3001/mascotas/?nombre=tito
router.get("/nombre", async (req, res) => {
  try {
    const { nombre } = req.query;
    const petByName = await getPetByName(nombre);
    return res.status(200).json(petByName);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const response = req.body;
    const petPost = await postPetById(response);
    res.status(200).json(petPost);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const petId = await getPetById(id);
    res.status(200).json(petId);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});

module.exports = router;
