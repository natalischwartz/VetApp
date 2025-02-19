import MascotaModel from '../models/MascotaModel.js'

//mostramos todos los registros
export const getAllPets = async (req,res) =>{
    try {
        const pets = await MascotaModel.findAll();
        res.json(pets);
        
    } catch (error) {
        res.json({message: error.message})
    }
}