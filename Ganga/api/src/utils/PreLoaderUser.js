const { User } = require("../db");

const infoUser = [
    {
        name: "Renso",
        lastname: "Olariaga",
        admin: true,
        mail: "renso@ganga.com",
        password: "asd12345",
        birthdate: "1996-07-26",
        address: "La Plata",
        seller: true
    },
    {
        name: "igna",
        lastname: "estiga",
        mail: "igna@ganga.com",
        password: "asd12345",
        birthdate: "1996-07-26",
        address: "Santiago",
        seller: true
    },
    {
        name: "eze",
        lastname: "camargo",
        mail: "eze@ganga.com",
        password: "asd12345",
        birthdate: "1996-07-26",
        address: "Cordoba",
    },
    {
        name: "seba",
        lastname: "torres",
        mail: "seba@ganga.com",
        password: "asd12345",
        birthdate: "1996-07-26",
        address: "Colombia",
    },

]

async function preLoadUser() {
    try {
      await User.bulkCreate(infoUser);
    } catch (error) {
      console.log("error: ", error);
    }
  }

module.exports = {
    preLoadUser,
};
  