import { Link } from 'react-router-dom'
import '../Styles/Components/Header.css'

function Header() {


    return (
        <div className="Header">
            <h1 className="Header-title">
                <Link to="/">Zeus Ecommerce</Link>
            </h1>
            <div>Productos</div>
            <div>Contacto</div>
            <div className="Header-checkout">
            
                <Link to="/checkout">
                <i className="fas fa-shopping-cart fa-2x" />  
                </Link>
                {/* {cart.length > 0 && <div className="Header-alert">{cart.length}</div> } */}
            </div>
        </div >
    )
}

export default Header