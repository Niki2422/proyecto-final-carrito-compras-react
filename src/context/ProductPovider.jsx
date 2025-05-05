import React, {useState, useEffect} from "react"
import { ProductContext } from "./productContext"
import Swal from 'sweetalert2'

export const ProductPovider = ({children}) => {

    const [products, setProducts] = useState([])

  const fetcProducts = async () => {
    try{
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }
    catch (error){
      Swal.fire(
        {
          icon: 'error',
          title: 'Error!',
          text: 'Hubo un problema al cargar los productos'
        }
      )
      console.log(error)
    }

  }

  useEffect(() => {
    fetcProducts()
  }, [])
  
  

  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}
