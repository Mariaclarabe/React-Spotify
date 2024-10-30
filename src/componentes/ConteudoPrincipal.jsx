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
        <div className="bg-gray-420 w-3/4 place-items-center flex-row">
        
        <h1 className="mt-10 ml-[70px] text-2xl font-bold">Pop</h1>
        <br></br>

        <div className="flex flex-row justify-around"></div>
       {artistas
        .filter( artista => artista.genero.includes ("Pop"))
        .map(artista => (
          <Link to={`/artista/${artista._id}`} key={artista._id}>

            
          <div className="bg-purple-200 w-40 h-40 rounded-lg flex flex-col justify-around items-center"
           style={{ backgroundImage: `url(${artista.img})`, backgroudSize: 'cover'}}>
            
            <h1 className=" text-white font-semibold absolute bottom-5">{artista.name}</h1>
          </div>
          </Link>
        ))
       }
        
    
        <>
        <div className="bg-gray-420 w-3/4 place-items-center flex-row"></div>

        <h1 className="mt-10 ml-[70px] text-2xl font-bold">Rap</h1>
        <br></br>
        <div className="flex flex-row justify-around"></div>
       {artistas
        .filter( artista => artista.genero.includes ("Rap"))
        .map(artista => (
          <Link to={`/artista/${artista._id}`} key={artista._id}>

          <div className="bg-purple-200 w-40 h-40 rounded-lg flex flex-col justify-around items-center"
           style={{ backgroundImage: `url(${artista.img})`, backgroudSize: 'cover'}}>
          
          <h1 className=" text-white font-semibold absolute bottom-5">{artista.name}</h1>
          </div>
          </Link>
        ))
       }
        </>

       
          </div>
          
         
       
    )
}