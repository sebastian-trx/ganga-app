const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },

            name: {
                type: DataTypes.STRING,
            },

            surname: {
                type: DataTypes.STRING,
            },

            mail: {
                type: DataTypes.STRING,
            },        

            password: {
                type: DataTypes.STRING,
            },    

            cellphone: {
                type: DataTypes.INTEGER,
            },    

            address: {
                type: DataTypes.STRING,
<<<<<<< Updated upstream
            },
            
=======
            },    

            country: {
                type: DataTypes.STRING,
            },    

            province: {
                type: DataTypes.STRING,
            },    

            cp: {
                type: DataTypes.STRING,
            },    

            admin: {
                type: DataTypes.BOOLEAN,
            },            

            birthdate: {
                type: DataTypes.DATEONLY,
            },            

>>>>>>> Stashed changes
            image: {
                type: DataTypes.STRING,
            },
            
            seller: {
                type: DataTypes.BOOLEAN,
            },

        },
        { timestamps: false, paranoid: true }
    );
};
