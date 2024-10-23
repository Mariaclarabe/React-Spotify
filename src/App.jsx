import { useEffect, useState } from "react";
import Container from "./componentes/Container";
import Header from "./componentes/Header";
import Sidebar from "./componentes/Sidebar";
import { Outlet } from "react-router-dom";

function App() { 
  

   
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
