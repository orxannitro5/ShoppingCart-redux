import { useSelector,useDispatch } from "react-redux"
import "./Checkout.css"
import { removeitemfromcart } from "./Redux/cartAction"
import Subtotal from "./Subtotal"
const Checkout = ()=>{
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    
    return (
        <div className="checkout">
            <div className="checkout-items">
                <h2>Your Shopping Cart</h2>
                
                {cart.cart.map(item =>{
                    
                    return (
                        <div className="checkout-product">
                            <img src={item.image} alt="" />
                            <div className="checkout-product-info">
                                <h1>{item.title}</h1>
                                <p>{item.rating}</p>
                                <p>{item.price}</p>
                                <button onClick={()=> dispatch(removeitemfromcart(item.id,item.title,item.price,item.rating,item.image))}>Remove from Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="subtotal">
                <Subtotal/>
            </div>
        </div>
    )
}
export default Checkout