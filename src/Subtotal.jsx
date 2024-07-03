import "./Subtotal.css"
import { useSelector } from "react-redux"
import { GetTotal } from "./Redux/cartReducer"

const Subtotal = ({price})=>{
    const cart = useSelector(state=>state.cart)
    
    return (
        <div className="subtotal">
            <div className="subtotal-area">
                <p>Subtotal ({cart.cart.length} items): ${GetTotal(cart.cart)}</p>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}
export default Subtotal