const { User } = require("../db.js");

async function postUser(req, res) {
  /*
      Postea User. Recibe parametros por body, se fija si hay usuario con dicho mail creado
      y se crea en caso de no haber
    */

  const { name, lastname, mail, address, image, seller } =
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
  const { id, 
    name,
    lastname,
    mail,
    address,
    image,
    seller
  } = req.body;

      try
      {
          const infoUpdateUser = {
              name, 
              lastname,
              mail,
              address,
              image,
              seller
            }

          const userById = await User.findByPk(id);
          
          userById ? res.send(await userById.update(infoUpdateUser)) : res.send('No se ha podido actualizar el usuario')
          
      }catch(error) {
          console.log(error)
  }  
}

async function deleteUser(req, res) {
  const { id } = req.query;
  console.log('soy el id de deleteUser(controller): ', id)

  try{
      
      const deleteUser = await User.findByPk(id)

      deleteUser  ? res.send(await deleteUser.destroy()) : res.json('No se ha podido eliminar el usuario')

  }
  catch (error){
      console.log(error)
  }

}

async function allUsers(req, res) {
  const { name } = req.query;

  try{

    const allDbUsers = await User.findAll()

    if(name) {

        const userByName = await User.findAll({where: {name: name}})

        userByName ? res.send(userByName) : res.send('No se ha encontrado un usuario con ese nombre')
    }
    else{
        res.send(allDbUsers)
    }
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
};