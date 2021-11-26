const { Category } = require("../db");

const infoCategory = [
  {
    name: "Electrodomesticos",
    // sub: ["Celulares", "Domestico"],
  },
  { name: "Moda" },
  { name: "Tecnologia" },
  { name: "Juegos y Jugetes" },
  { name: "Herramientas" },
  { name: "Hogar y Muebles" },
];

async function preLoadCategory() {
  try {
    await Category.bulkCreate(infoCategory);
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = {
  preLoadCategory,
};
