import mongoose from "mongoose";

//está sendo criado um Schema para o artista 

const artistaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true },
    genero: {type : String}

});

const artista = mongoose.model('artistas', artistaSchema);

export default artista;