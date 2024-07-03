import Product from "./Product"
import "./home.css"
import Product1 from "./product1.webp"
import Product2 from "./product2.webp"
import Product3 from "./product3.webp"

const Home = () => {
    return (
        <div className="home">
            <div className="a">
                <Product
                    id={new Date().toISOString()}
                    title="the product one is Shampoo "
                    price="50"
                    rating="⭐⭐⭐"
                    image={Product1}
                />
                <Product
                    id={new Date().toISOString()}
                    title="Cosmetics Rp"
                    price="230"
                    rating="⭐⭐⭐⭐⭐"
                    image={Product2}
                />

            </div>
            <div>
                <Product
                    id={new Date().toISOString()}
                    title="Toyota Air Filter  "
                    price="12"
                    rating="⭐"
                    image={Product3} />
            </div>
        </div>
    )
}
export default Home