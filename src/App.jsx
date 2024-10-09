import Card from "./componentes/CardSidebar"
import Container from "./componentes/Container"
import ConteudoPrincipal from "./componentes/ConteudoPrincipal"
import Header from "./componentes/Header"
import Sidebar from "./componentes/Sidebar"

function App() {
  const [artistas, setArtistas] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);
  

    useEffect(() => {
      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
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
        {
          artistas.map(artista => (
          <div className="bg-bege-400 w-3/4 grid grid-cols-4 place-itens-center items-center">
          <div className="bg-purple-200 w-28 h-28 flex flex-col justify-around items-center">
            <div className="bg-purple-400 w-3/4 h-7"></div>
            <div className="bg-purple-400 w-3/4 h-7"></div>
          </div>
          </div>
          ))
        }
      
          </ConteudoPrincipal>
      </Container>
      
     
       
        
      
    </>
  )
}

export default App
