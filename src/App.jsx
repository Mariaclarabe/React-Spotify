import { useEffect, useState } from "react"
import Card from "./componentes/CardSidebar"
import Container from "./componentes/Container"
import ConteudoPrincipal from "./componentes/ConteudoPrincipal"
import Header from "./componentes/Header"
import Sidebar from "./componentes/Sidebar"

function App() {
  const [artistas, setArtistas] = useState ([]);
    
  

    useEffect(() => {
      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
      .finally(() => console.log("Finalizou Requisição"))
    }, [])

  return (
    <>

      <Header />
      <Container>
      <Sidebar>
        <Card/>
        <Card/>
        <Card/>

        </Sidebar>
      
      <ConteudoPrincipal>
        <>
        <h1>Rap</h1>
        {
          artistas
          .filter(artista => artista.genero === "Rap")
          .map(artista => (
   
          <div className="bg-purple-200 w-28 h-28 flex flex-col justify-around items-center">
            <h1>{artista.name}</h1>
          </div>
        
          ))
        }
        </>
        
      <>
      <h1>Pop</h1>
        {
          artistas
          .filter(artista => artista.genero === "Pop")
          .map(artista => (
   
          <div className="bg-purple-200 w-28 h-28 flex flex-col justify-around items-center">
            <h1>{artista.name}</h1>
          </div>
        
          ))
        }
      </>
      
          </ConteudoPrincipal>
      </Container>
      
     
       
        
      
    </>
  )
}

export default App
