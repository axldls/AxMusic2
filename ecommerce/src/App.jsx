
import ItemCount from './components/ItemsCount/ItemCount'
import TituloPrincipal from './components/Tituloprincipal/TituloPrincipal'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting = {"Hola usuarios"} />
    </>
  )
}

export default App
