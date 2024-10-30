import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';
import artista from "./models/Artista.js"

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (erro) => {
    console.error('Erro ao conctar no MongoDB', erro)
})

conexao.once('open', () => {
    console.log('Conectado ao MongoDB')
})

app.get('/artistas', async (req,res) => {
    const listaArtista = await artista.find ({});
    res.status(200).json(listaArtista);
})

app.get('/artistas/:id', async (req, res) => {
    const artista = await artista.findById(req.params.id);
    res.status(200).json(artista);
});


app.listen(3000, () => {
    console.log('Servidor conectado')

})

