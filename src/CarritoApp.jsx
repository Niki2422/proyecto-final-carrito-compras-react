import { Navigate , Route , Routes } from "react-router-dom"
import { NavBarComponent } from "./component/NavBarComponent"
import { ProductsPage } from "./pages/ProductsPage"
import { CartPage } from "./pages/CartPage"
import { ProductPovider } from "./context/ProductPovider"
import { CartProvider } from "./context/CartProvider"

export const CarritoApp = () => {
  return (
    <ProductPovider>
      <CartProvider>
    <NavBarComponent/>
    <div className="container">
      <Routes>
        <Route path='/' element={ <ProductsPage />}></Route>
        <Route path='/carrito' element= {<CartPage />}></Route>
        <Route path='/*' element={<Navigate to='/'/>}></Route>
      </Routes>



    </div>
    </CartProvider>
    
    </ProductPovider>
  )
}
