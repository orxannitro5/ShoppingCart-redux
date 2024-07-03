
const initialState = {
    cart:[]
}
export const GetTotal = (cart)=>{
    return(
        cart.reduce((amount,item)=> parseInt(item.price)  + amount,0)
    )
}
const CartReducer = (state = initialState,action)=>{
    switch (action.type) {
        case "ADD_ITEM_TO_CART":
            return{
                ...state,cart:[...state.cart,action.item]
            }
        case "REMOVE_ITEM_FROM_CART":
            return{
                ...state,
                cart:state.cart.filter((item) => item.id !== action.item.id ),
            }
    
        default:
            return state;
    }
}
export default CartReducer