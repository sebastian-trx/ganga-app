const { Product, User, Category, Review } = require("../db.js");
const { Op } = require("sequelize");

async function postProduct(req, res) {
  /*
      Postea User. Recibe parametros por body, se fija si hay usuario con dicho mail creado
      y se crea en caso de no haber
    */

  const {
    name,
    mark,
    description,
    price,
    stock,
    image,
    idUser,
    idCategory,
    idReview,
  } = req.body;
  // Formato para enviar cumpleaños: 1991-11-28

  const check = await Product.findOne({
    where: {
      name: name,
    },
  });

  if (check) res.json("Producto ya existente en la base de datos");
  else {
    const product = {
      name,
      mark,
      description,
      price,
      stock,
      image,
    };

    try {
      const newProduct = await Product.create(product);

      newProduct
        ? await newProduct.setUser(idUser)
        : console.log("No se ha podido relacionar el producto con el usuario");

      newProduct
        ? await newProduct.setCategory(idCategory)
        : console.log(
            "No se ha podido relacionar el producto con la categoria"
          );

      // console.log('soy el idReview: ', idReview)
      // newProduct ? await newProduct.setReview(idReview) : console.log('No se ha podido relacionar el producto con la devolucion')

      // if (newProduct) res.json({ type: "success", data: product });
      // else {
      //   res.json({ type: "failure", data: "Error en creación de producto" });
      // }
      newProduct
        ? res.send({ type: "success", data: newProduct })
        : res.json({ type: "failure", data: "Error en creación de producto" });
    } catch (error) {
      res.send({ type: "failure", data: error });
    }
  }
}

async function putProduct(req, res) {
  const { id, name, mark, description, price, stock, image, idCategory } =
    req.body;

  try {
    const infoUpdateProduct = {
      name,
      mark,
      description,
      price,
      stock,
      image,
    };

    const productById = await Product.findByPk(id);

    productById
      ? res.send(await productById.update(infoUpdateProduct))
      : res.send("No se ha podido actualizar el producto");
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(req, res) {
  const { id } = req.query;
  console.log("soy el id de deleteProduct(controller): ", id);

  try {
    const deleteProduct = await Product.findByPk(id);

    deleteProduct
      ? res.send(await deleteProduct.destroy())
      : res.json("No se ha podido eliminar el producto");
  } catch (error) {
    console.log(error);
  }
}

async function allProducts(req, res) {
  const { name, id } = req.query;
  const allDbProducts = await Product.findAll();
  if (name) {
    try {
      const productByName = await Product.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      productByName.length !== 0
        ? res.json(productByName)
        : res.send("No se ha encontrado un producto con ese nombre");
      } catch (error) {
        console.log(error);
      }
  } else if (id) {
    try {
      const productId = await Product.findByPk(id);
      productId
        ? res.json(productId)
        : res.send("No se ha encontrado un producto con este ID");
    } catch (error) {
      console.log(error);
    }
  } else {
    res.send(allDbProducts);
  }
}
const productInfo = async(req, res) => {
  const { id } = req.query;

  try{
    const dbProduct = await Product.findByPk(id);
    console.log('soy el dbProduct: ', dbProduct)
    const productReview = await Review.findAll({  // seria algo parecido para el review del usuario
      where:{productId: id}
    })
    dbProduct ? res.send({product: dbProduct,
    review: productReview}) : res.send(`No se ha encontrado el producto con el id: ${id}`)
  }
  catch(error) {
    console.log(error)
  }
}

module.exports = {
    postProduct,
    putProduct,
    deleteProduct,
    allProducts,
    productInfo
};
