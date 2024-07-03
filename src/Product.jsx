import "./Product.css"
import { useDispatch } from "react-redux"
import { additemtocard } from "./Redux/cartAction"
const Product = ({id,title,price,rating,image})=>{
    const dispatch = useDispatch()
    return(
        <div className="product" key={id}>
            <h4>{title}</h4>
            <p>{rating}</p>
            <p>{price}</p>
            <img src={image} alt="" />
            <button onClick={()=> dispatch(additemtocard(id,title,price,rating,image))}>Add to Cart</button>
        </div>
    )
}
export default Product