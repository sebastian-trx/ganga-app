const { Product } = require("../db");

const infoProduct = [
  {
    name: "Pelota Nike Fútbol Playa",
    mark: "Nike",
    description:
      "Pelota de Futbol Playa, Usada como nueva. modelo Tsubasa Pro Beach Nº5",
    price: "1",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_844835-MLA44803313304_022021-O.webp",
      category: "Deportes y fitness",
      subcategories: ["Fútbol"],
  },
  {
    name: "Pelota Nike Fútbol 11",
    mark: "Nike",
    description:
      "Pelota de Futbol 11, Excelente condiciones. Sirve para entrenamientos y partidos amistosos",
    price: "20",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_609347-MLA47330116405_092021-O.webp",
      category: "Deportes y fitness",
      subcategories: ["Fútbol"],
  },
  {
    name: "Zapatillas Nike Hoops 2.0",
    mark: "Nike",
    description: "Zapatillas para todo uso, marca Adidas 100% originales",
    price: "35",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_763666-MLA47081340430_082021-O.webp",
    category: "Indumentaria",
    subcategories: ["Zapatillas"],
  },
  {
    name: "Zapatillas Nike Air Max Excee",
    mark: "Nike",
    description: "Zapatillas en excelente calidad talla 10.5 US.",
    price: "38",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_886359-MLA47582509221_092021-O.webp",
      category: "Indumentaria",
      subcategories: ["Zapatillas"],
  },
  {
    name: "Camiseta De Argentina Adidas",
    mark: "Adidas",
    description: "CAMISETA DE ARGENTINA TITULAR MUNDIAL MEXICO 1986",
    price: "20",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_836338-MLA41873746734_052020-O.webp",
      category: "Indumentaria",
      subcategories: ["Remeras"],
  },
  {
    name: "Camiseta Holanda Titular Adidas",
    mark: "Adidas",
    description: "Johan Cruyff, Camiseta Holanda Mundial 1974",
    price: "20",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_728352-MLA47148620656_082021-O.webp",
      category: "Indumentaria",
      subcategories: ["Remeras"],
  },
  {
    name: "Bicicleta Sunny",
    mark: "Sunny",
    description:
      "Bicicleta Sunny Modelo Mts 290 Rodado 29 Negro Amarillo,Asiento acolchado regulabe Incluye manual de instrucciones para su correcto armado",
    price: "60",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_743278-MLA45980583709_052021-O.webp",
      category: "Deportes y fitness",
      subcategories: ["Ciclismo"],
  },
  {
    name: "Samsung Galaxy Note20",
    mark: "Samsung",
    description:
      "Especificaciones: 256 GB gris místico 8 GB RAM, Cámara trasera principal: 64 Mpx ",
    price: "120",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_947785-MLA44210097170_112020-O.webp",
      category: "Tecnologia",
      subcategories: ["Celulares y telefonos"],
  },
  {
    name: "LG K52",
    mark: "LG",
    description: "64 Gb + 4 Gb Ram Azul Cámara trasera principal: 48 Mpx",
    price: "70",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_906599-MLA47575297130_092021-O.webp",
      category: "Tecnología",
      subcategories: ["Celulares y telefonos"],
  },
  {
    name: "Samsung Smart TV",
    mark: "Samsung",
    description:
      "Samsung Series 7 UN50TU7000GCZB LED 4K 50. Aplicaciones integradas: Samsung Promotion, YouTube, Netflix, Google Play, Apple TV, SmartThings, Web browser, Prime Video, Gallery, Google Play Movies & TV ",
    price: "150",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_878604-MLA44160072739_112020-O.webp",
      category: "Tecnología",
      subcategories: ["Televisores"],
  },
  {
    name: "Monitor Gamer LG",
    mark: "LG",
    description:
      "LG 27GL650F led 27 negro, Full HD, tiene una resolución de 1920px-1080px. ",
    price: "90",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_624926-MLA44490109901_012021-O.webp",
      category: "Tecnología",
      subcategories: ["Computacion"],
  },
  {
    name: "Notebook HP 14-dq2024la",
    mark: "HP",
    description:
      "Core I3 1115g4 8gb 256gb M2 Ssd W10,  pantalla de 14'', Duración de la batería 9 h  ",
    price: "120",
    stock: 4,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_962681-MLA47729250270_102021-O.webp",
      category: "Tecnología",
      subcategories: ["Computacion"],
  },
  {
    name: "Miles Morales Standard Edition Sony PS4 Físico",
    mark: "Sony",
    description:
      "Hombre Araña Marvel's Spider-Man: Miles Morales Standard Edition, plataforma PS4, Formato fisico",
    price: "60",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_984177-MLA44963321666_022021-O.webp",
      category: "Tecnología",
      subcategories: ["Consolas y videojuegos"],
  },
  {
    name: "Silla Plastica Ideal",
    mark: "Ideal",
    description:
      "Silla Plastica Reforzada Ideal Juego X4 Exteriores Jardin",
    price: "80",
    stock: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_830905-MLA45643896168_042021-O.webp",
      category: "Hogar y Muebles",
      subcategories: ["Jardin y Aire Libre"],
  },
  {
    name: "Manguera Pvc",
    mark: "Pvc",
    description:
      "Manguera Para Riego Pvc 1/2 X 50 Metros Caño Virgen",
    price: "30",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_698725-MLA43704259794_102020-O.webp",
      category: "Herramientas",
      subcategories: ["Herramientas para Jardin"],
  },
  {
    name: "Aire Acondicionado Bgh",
    mark: "Bgh",
    description:
      "Aire Acondicionado Bgh Silent Air Split Inverter 3500w",
    price: "200",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_984177-MLA44963321666_022021-O.webp",
      category: "Electrodomesticos",
      subcategories: ["Climatizacion"],
  },
  {
    name: "Taladro Atornillador Klatter",
    mark: "Klatter",
    description:
      "Taladro Atornillador Klatter 14v Inalambrico 10mm",
    price: "70",
    stock: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_935558-MLA45017514805_022021-O.webp",
      category: "Herramientas",
      subcategories: ["Herramientas Electricas"],
  },
  {
    name: "Hidrolavadora Kärcher",
    mark: "Sony",
    description:
      "Hidrolavadora Kärcher Home & Garden K3 Full Control *AR con 120bar de presión máxima 220V",
    price: "160",
    stock: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_804890-MLA40506772405_012020-O.webp",
      category: "Herramientas",
      subcategories: ["Herramientas Electricas", "Herramientas para Jardin"],
  },
  {
    name: "Kit De Herramientas Manuales",
    mark: "Deco Estrella",
    description:
      "Kit De Herramientas Manuales 113 Pzs Set Acero Inoxidable",
    price: "55",
    stock: 6,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_983972-MLA44508169524_012021-O.webp",
      category: "Herramientas",
      subcategories: ["Herramientas Manuales"],
  },
  {
    name: "Juego Llave Combinada",
    mark: "Qtools",
    description:
      "Juego Llave Combinada 6 A 22 Mm 12 Piezas",
    price: "25",
    stock: 5,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_779077-MLA47229455553_082021-O.webp",
      category: "Herramientas",
      subcategories: ["Herramientas Manuales"],
  },
  {
    name: "Volkswagen Gol 1.0 De Baja",
    mark: "Volkswagen",
    description:
      "Vw Gol 1.0 Mod. 1999 3p Dado de Baja Definitiva total Sirve solo para repuestos",
    price: "600",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_991793-MLA44515257451_012021-O.webp",
      category: "Vehiculos",
      subcategories: ["Autos chocados y averiados"],
  },
  {
    name: "Honda Cb250 Twister Inyeccion",
    mark: "Honda",
    description:
      "Honda Cb250 Twister Inyeccion año 2020 250 cc 16mil Km",
    price: "3000",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_931639-MLA48097466379_112021-O.webp",
      category: "Vehiculos",
      subcategories: ["Motos"],
  },
  {
    name: "Honda Elite 125",
    mark: "Honda",
    description:
      "Moto scooter honda élite 125 con casco de regalo año 2017 11000 km",
    price: "1900",
    stock: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_717832-MLA48232349747_112021-O.webp",
      category: "Vehiculos",
      subcategories: ["Motos"],
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
