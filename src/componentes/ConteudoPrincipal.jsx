import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ConteudoPrincipal(){

    const [artistas, setArtistas] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/artistas')
        .then(res => res.json())
        .then(data => {setArtistas(data); console.log(data)})
        .catch(err => console.log(err))
        .finally(() => console.log("Finalizou Requisição"))
      }, [])
  

    return(
        <div className="bg-bege-400 w-3/4 grid grid-cols-4 place-itens-center items-center">
         <>
        <h1>Pop</h1>
        {    //   .filter(artista => artista.genero === "Rap")
          artistas.map(artista => (
            <Link to={`/artista/${artista._id}`}>
          <div className="bg-purple-200 w-28 h-28 flex flex-col justify-around items-center">
            <h1>{artista.name}</h1>
          </div>
          </Link>
          ))
        }
        </>

        <>
        <h1>Rap</h1>
        {    //   .filter(artista => artista.genero === "Rap")
          artistas.map(artista => (
            <Link to={`/artista/${artista._id}`}>
          <div className="bg-purple-200 w-28 h-28 flex flex-col justify-around items-center">
            <h1>{artista.name}</h1>
          </div>
          </Link>
          ))
        }
        </>
          </div>
          
         
       
    )
}