import "./productlist.css";
import Product from "../product/product";

const Productlist = () => {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">My projects</h1>
                <p className="pl-desc">I'll be adding more soon, stay around!</p>
            </div>
            <div className="pl-list">
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    )
}


export default Productlist