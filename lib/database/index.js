//import {Sequelize, Model, DataType, DataTypes} from 'sequelize'
//const Sequelize = require('sequelize');
//import Sequelize from 'sequelize'
import DataType from 'sequelize'
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});
const t = DataTypes;

await sequelize.drop();

// criando as tabelas
const User = sequelize.define("User", {
    name : {
        type : t.STRING,
        allowNull : false,
    },
    email : {
        type : t.STRING
    },
    password : {
        type  : t.STRING
    }
})

// criando elementos para os usuários
const henrique = User.create({
    name : "Henrique Mauler Borges",
    email : "henriquemauler@gmail.com",
    password : "he147369",
})

try {
    await sequelize.authenticate();
    console.log("conexão feita com sucesso");
} catch (error) {
    console.log("erro na conexão");
}


await sequelize.sync({ force : true});