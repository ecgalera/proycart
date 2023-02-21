import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import ItemsDetail from "../itemsdetail/ItemsDetail"


const ItemsDetailContainer = () => {

  const [product, setProduct] = useState([])
  const {productoId} =useParams()


  useEffect(() => {

      fetch(`https://fakestoreapi.com/products/${productoId}`)
  .then(res=>res.json())
  .then(product=>setProduct(<ItemsDetail key={product.id} id={"product" + product.id} data={product} stock={5} />))

    },[productoId])
  
 


  return (
  <div>
  {product}
  </div>
  )
}

export default ItemsDetailContainer