import "./Header.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Header = ()=>{
    const cart = useSelector(state=>state.cart)
    return (
        <div className="header">
            <div className="header-end">
                <Link to="/checkout" style={{textDecoration:"none",color:"white"}}>
                <span>Cart</span> <strong>{cart.cart.length}</strong></Link>
            </div>
        </div>
    )
}
export default Header