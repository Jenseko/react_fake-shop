import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// _______________________________________________

const ProductDetails = () => {

    const [product, setProduct] = useState([]);
    const idParams = useParams();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json));
    }, []);

    const detailItems = product.filter((elt) => {
        return elt.id.toString() === idParams.id
    })

    return (
        <section>
            {detailItems.map((item) => {
                return (
                    <section className="product_card">
                        <div>
                            <img src={item.image} alt="productimage" />
                        </div>
                        <article>
                            <h3>{item.title}</h3>
                            <p>{`⭐️ ${item.rating.rate} (${item.rating.count} Ratings)`}</p>
                            <h4>{`${item.price.toFixed(2)} €`}<span>  + Free Delivery in 2 Days</span></h4>
                            <p>{`Category: ${item.category}`}</p>
                            <p>{item.description}</p>
                        </article>
                    </section>
                )
            })}
        </section>
    )
}

export default ProductDetails;