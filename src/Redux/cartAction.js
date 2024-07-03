
export const additemtocard = (id,title,price,rating,image)=>{
    return {
        type:"ADD_ITEM_TO_CART",
        item:{
            id: new Date().toISOString(),
            title:title,
            price:price,
            rating:rating,
            image:image
        }
    }
}
export const removeitemfromcart = (id,title,price,rating,image)=>{
    return {
        type:"REMOVE_ITEM_FROM_CART",
        item:{
            id:id,
            title:title,
            price:price,
            rating:rating,
            image:image
        }
    }
}
