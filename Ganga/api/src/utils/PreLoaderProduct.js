const { Product } = require("../db");

const infoProduct = [
  {
    name: "pelota",
    description: "futbol 5",
    price: "10",
    stock: 2,
    image:
      "https://www.coopehogar.coop/media/ch/publico/articulos/f/4/7/f479a04c398fa99343acc95dbc0dda4c",
  },
  {
    name: "silla",
    description: "de madera",
    price: "20",
    stock: 4,
    image:
      "https://i.pinimg.com/474x/2e/5b/c6/2e5bc644ff7353daa3b0d631b66ee503.jpg",
  },
];

async function preLoadProduct() {
  try {
    await Product.bulkCreate(infoProduct);
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = {
  preLoadProduct,
};
