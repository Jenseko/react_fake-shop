import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
// _______________________________________________

const Productlist = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }, [])

    console.log(products)

    return (
        <section className="grid_section">
            {products.map((item) => {
                return (
                    <div key={item.id}>
                        <ProductItem
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            category={item.category}
                        />
                    </div>
                );
            })}
        </section>
    );
};

export default Productlist;