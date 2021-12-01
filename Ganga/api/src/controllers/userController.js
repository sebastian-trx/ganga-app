const { User, Review } = require("../db.js");
const { Op } = require('sequelize');

async function postUser(req, res) {
  /*
      Postea User. Recibe parametros por body, se fija si hay usuario con dicho mail creado
      y se crea en caso de no haber
    */

  const { name, lastname, mail, address, image, seller, birthdate, password } =
    req.body;
  // Formato para enviar cumpleaños: 1991-11-28

  const check = await User.findOne({
    where: {
      mail: mail,
    },
  });

  if (check) res.json("Usuario ya existente en la base de datos");
  else {
    const user = {
      name,
      lastname,
      mail,
      address,
      image,
      seller,
      birthdate,
      password,
    };

    try {
      const newUser = await User.create(user);
      if (newUser) res.json({ type: "success", data: user });
      else {
        res.json({ type: "failure", data: "Error en creación de usuario" });
      }
    } catch (error) {
      res.send({ type: "failure", data: error });
    }
  }
}

async function putUser(req, res) {
  const { id, name, lastname, mail, address, image, seller, birthdate, password } =
    req.body;

  try {
    const infoUpdateUser = {
      name,
      lastname,
      mail,
      address,
      image,
      seller,
      birthdate,
      password
    };

    const userById = await User.findByPk(id);

    userById
      ? res.send(await userById.update(infoUpdateUser))
      : res.send("No se ha podido actualizar el usuario");
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res) {
  const { id } = req.query;

  try {
    const deleteUser = await User.findByPk(id);

    deleteUser
      ? res.send(await deleteUser.destroy())
      : res.json("No se ha podido eliminar el usuario");
  } catch (error) {
    console.log(error);
  }
}

async function allUsers(req, res) {
  const { name, id } = req.query;
  const allDbUsers = await User.findAll();

  if (name) {
    try {
      const userByName = await User.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      userByName.length !== 0
        ? res.json(userByName)
        : res.send("No se ha encontrado un usuario con ese nombre");
    } catch (error) {
      console.log(error);
    }
  } else if (id) {
    try {
      const userId = await User.findByPk(id);
      userId
        ? res.json(userId)
        : res.send("No se ha encontrado un usuario con ese ID");
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json(allDbUsers);
  }
}

const userInfo = async(req, res) => {
  const { id } = req.query;

  try{
    const dbUser = await User.findByPk(id);
    console.log('soy el dbUser: ', dbUser)
    const userReview = await Review.findAll({  // seria algo parecido para el review del usuario
      where:{userId: id}
    })
    dbUser ? res.send({user: dbUser,
    review: userReview}) : res.send(`No se ha encontrado el producto con el id: ${id}`)
  }
  catch(error) {
    console.log(error)
  }
}

module.exports = {
  postUser,
  putUser,
  deleteUser,
  allUsers,
  userInfo
};
