import { Link } from "react-router-dom";

// _______________________________________________

const ProductItem = (props) => {
    console.log(props)
    return (
        <div className="single_item_div" key={props.id}>
            <Link to={`/productdetail/${props.id}`}>
                <img src={props.image} alt="productimage" />
                <h4>{props.title}</h4>
            </Link>
            <p>{`⭐️ ${props.rating.rate} (${props.rating.count} Ratings)`}</p>
            <h3>{`${props.price.toFixed(2)} €`}</h3>
            <p>{`Category: ${props.category}`}</p>
        </div>
    );
}

export default ProductItem;