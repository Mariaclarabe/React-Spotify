import Card from "./componentes/CardSidebar"
import Container from "./componentes/Container"
import ConteudoPrincipal from "./componentes/ConteudoPrincipal"
import Header from "./componentes/Header"
import Sidebar from "./componentes/Sidebar"

function App() {

  return (
    <>

      <Header />
      <Container>
      <Sidebar>
        <Card/>
        <Card/>
        <Card/>

        </Sidebar>
      
      <ConteudoPrincipal/>
      </Container>
      
     
       
        
      
    </>
  )
}

export default App
