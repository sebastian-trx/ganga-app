const { Category } = require("../db.js");

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.findAll();

    allCategories
      ? res.json(allCategories)
      : res.json("No se han encontrado las categorías");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCategories,
};
