import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function DetalhesArtista() {

    const { id } = useParams()

    const [artista, setArtistas] = useState({})

    useEffect(() => {
        fetch(`${id}`)
            .then((res) => res.json())
            .then((data) => setArtistas(data))
            .catch((err) => console.log(err))
            .finally(() => console.log("Finalizou a requisição"));
    }, []);




    return (
        
            <div className="w-3/4 px-10 pt-0 gap-y-10 flex flex-col items-center"> 
                    <Link className="flex items-center w-full justify-between" to="/">
                    </Link>  
                <h1 className="text-3xl font-bold text-white">{artista.name}</h1>
                <img className="w-80 h-auto" src={artista.imagem} alt="" />
                <p className="text-lg text-white text-justify">{artista.genero}</p>
            </div>
        
    )
}