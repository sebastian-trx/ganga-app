const { Subcategory } = require("../db");

const infoSubCategory = [
  { name: "Remeras" },
  { name: "Pantalones" },
  { name: "Cocinas" },
  { name: "Acondicionadores de Aire" },
  { name: "Taladros" },
  { name: "Destornilladores" },
  { name: "Muebles" },
  { name: "Jardin" },
  { name: "Computacion" },
  { name: "Celulares" },
];

async function preLoadSubCategory() {
  try {
    await Subcategory.bulkCreate(infoSubCategory);
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = {
  preLoadSubCategory
};
