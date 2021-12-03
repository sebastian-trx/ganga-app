const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      amount: {
        type: DataTypes.INTEGER, // modificar en controlador
      },

      state: {
        type: DataTypes.STRING,
      },

      info: { // modificar en controlador
        type: DataTypes.TEXT
      },

      cellphone: {
        type: DataTypes.INTEGER, // modificar en controlador
      },

      mail: {
        type: DataTypes.STRING, // modificar en controlador
      },

      price: {
        type: DataTypes.INTEGER, // modificar en controlador
      },

      address: {
        type: DataTypes.STRING, // modificar en controlador
      },
    },
    { timestamps: false, paranoid: true }
  );
};
