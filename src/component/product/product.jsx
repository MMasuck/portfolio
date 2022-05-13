import "./product.css";
import project1 from "../../img/project1.jpg";


const Product = () => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href="https://mmasuck.github.io/rock-paper-lizard/" target="_blank" rel="noreferrer">
                <img src={project1} alt="" className="p-img"/>
            </a>
        </div>
    )
}

export default Product