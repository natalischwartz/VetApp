import db from '../database/db.js';

//DataTypes = configurar tipos de datos de las columnas
import { DataTypes } from 'sequelize'

const MascotaModel = db.define("mascotas",{
    Nombre:{type:DataTypes.STRING},
    Especie:{type:DataTypes.STRING},
    Raza:{type:DataTypes.STRING},
    Color: {type:DataTypes.STRING},
    Sexo: {type:DataTypes.STRING},
    Edad: {type:DataTypes.INTEGER}
})

export default MascotaModel;