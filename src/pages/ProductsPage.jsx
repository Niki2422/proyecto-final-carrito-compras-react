import { useContext } from "react"
import { CardComponent } from "../component/CardComponent"
import { ProductContext } from "../context/productContext"
import { CartContext } from "../context/CartContext"

export const ProductsPage = () => {

  const { products } = useContext(ProductContext)
  const { addProduct, removeProduct} = useContext (CartContext)

  return (
    <>
    <h1>Productos</h1>
    <hr />
    {products.map(product => (
      <CardComponent
        key={product.id}
        id={product.id}
        image={product.image}
        tittle={product.title}
        description={product.description}
        price={product.price}
        handlerAdd={() => addProduct(product)}
        handlerRemove={ () => removeProduct(product.id)}
        />
    ))}

    </>
  )
}
