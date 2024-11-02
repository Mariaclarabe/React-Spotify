import { useEffect, useState } from "react";
import Container from "./componentes/Container";
import Header from "./componentes/Header";
import Sidebar from "./componentes/Sidebar";
import { Outlet } from "react-router-dom";

function App() { 
  
  useEffect(() => {
    setIsLoading(true);
      fetch('https://spotify-deploy-api.vercel.app/novoArtistas')
      .then(res => res.json())
      .then(data => {setArtistas(data), console.log(data)})
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  },[])
   
  return (
    <>
      <Header />
      <Container>
      <Sidebar>
        </Sidebar>
      <Outlet/>
      </Container>
      
    </>
  )
}

export default App
