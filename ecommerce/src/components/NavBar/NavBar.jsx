import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>AxMusic</h1>

        <nav>
            <ul>
                <li>Guitarras</li>
                <li>Pianos</li>
                <li>Baterias</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar