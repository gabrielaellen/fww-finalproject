import Sequelize from "sequelize";
import db from "./db.js";

const filme = db.define("filmes", {
    id:{
       type:Sequelize.INTEGER ,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
    },
    titulo:{
        type:Sequelize.STRING(60),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    ator:{
        type:Sequelize.STRING(60),
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    faixa_etaria:{
        type:Sequelize.STRING(60),
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    genero:{
        type:Sequelize.STRING(60),
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
});

export default {filme}
