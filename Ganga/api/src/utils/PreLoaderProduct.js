const { Product } = require("../db");

const infoProduct = [
  {
    name: "Pelota Fútbol Playa",
    description: "Pelota de Futbol Playa, Usada como nueva. modelo Tsubasa Pro Beach Nº5",
    price: "1",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_844835-MLA44803313304_022021-O.webp",
  },
  {
    name: "Pelota Fútbol 11",
    description: "Pelota de Futbol 11, Excelente condiciones. Sirve para entrenamientos y partidos amistosos",
    price: "20",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_609347-MLA47330116405_092021-O.webp",
  },
  {
      name: "Zapatillas Hoops 2.0",
      description: "Zapatillas para todo uso, marca Adidas 100% originales",
      price: "35",
      stock: 4,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_763666-MLA47081340430_082021-O.webp",
    },
    {
      name: "Zapatillas Nike Air Max Excee",
      description: "Zapatillas Nike, excelente calidad talla 10.5 US. ",
      price: "38",
      stock: 4,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_886359-MLA47582509221_092021-O.webp",
    },
    {
      name: "Camiseta De Argentina",
      description: "CAMISETA DE ARGENTINA TITULAR MUNDIAL MEXICO 1986",
      price: "20",
      stock: 1,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_836338-MLA41873746734_052020-O.webp",
    },
    {
      name: "Camiseta Holanda Titular",
      description: "Johan Cruyff, Camiseta Holanda Mundial 1974",
      price: "20",
      stock: 1,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_728352-MLA47148620656_082021-O.webp",
    },
    {
      name: "Bicicleta Sunny",
      description: "Bicicleta Sunny Modelo Mts 290 Rodado 29 Negro Amarillo,Asiento acolchado regulabe Incluye manual de instrucciones para su correcto armado",
      price: "60",
      stock: 2,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_743278-MLA45980583709_052021-O.webp",
    },
    {
      name: "Celular Galaxy Note20",
      description: "Especificaciones: Marca Samsung, 256 GB gris místico 8 GB RAM, Cámara trasera principal: 64 Mpx ",
      price: "120",
      stock: 1,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_947785-MLA44210097170_112020-O.webp",
    },
    {
      name: " Celular LG K52",
      description: "Marca LG, 64 Gb + 4 Gb Ram Azul Cámara trasera principal: 48 Mpx",
      price: "70",
      stock: 1,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_906599-MLA47575297130_092021-O.webp",
    },
    {
      name: "Smart TV",
      description: "Samsung Series 7 UN50TU7000GCZB LED 4K 50. Aplicaciones integradas: Samsung Promotion, YouTube, Netflix, Google Play, Apple TV, SmartThings, Web browser, Prime Video, Gallery, Google Play Movies & TV ",
      price: "150",
      stock: 1,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_878604-MLA44160072739_112020-O.webp",
    },
    {
      name: "Monitor Gamer",
      description: "LG 27GL650F led 27 negro, Full HD, tiene una resolución de 1920px-1080px. ",
      price: "90",
      stock: 2,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_624926-MLA44490109901_012021-O.webp",
    },
    {
      name: "Notebook Hp 14-dq2024la",
      description: "Core I3 1115g4 8gb 256gb M2 Ssd W10,  pantalla de 14'', Duración de la batería 9 h  ",
      price: "20",
      stock: 4,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_962681-MLA47729250270_102021-O.webp",
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
