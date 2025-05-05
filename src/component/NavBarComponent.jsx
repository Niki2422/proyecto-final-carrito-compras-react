import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useContext } from "react"
import "../styles/NavBarComponent.css"
import { CartContext } from '../context/CartContext';


export const NavBarComponent = () => {

    const { shoppingList } = useContext(CartContext)

  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink to='/' className="navbar-brand">Carrito de compras</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div classame="navbar-nav">
                    <NavLink to='/' className="nav-link active" aria-current="page">Products</NavLink>
                </div>
                <div classame="navbar-nav">
                    <NavLink to='/carrito' className="nav-link active" aria-current="page">Carrito</NavLink>
                </div>
            </div>
            <NavLink className="cart-icon" to='/carrito'>
                <Badge badgeContent={shoppingList.length} color="primary">
                <ShoppingCartIcon />
                </Badge>
            </NavLink>
        </div>
    </nav>

  )
}
