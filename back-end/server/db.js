import mongoose from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect("mongodb+srv://maryaxzfal:mcfa*210806@cluster0.ijq4i.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
}

