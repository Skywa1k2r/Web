import React, { useEffect, useState } from 'react';
import Product from '../../components/Cards/Product'

const Like = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/db/products.json'); // Adjust the path based on your project structure
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
    return (
        <div className="container row bg-light rounded p-3 mx-auto">
            <h2 className='text-center'>You may also like</h2>
            {products.slice(0, 3).map((product) => (
                <Product id = {product.id} img={product.img} name = {product.name} description = {product.description} price={product.price} />
            ))}
        </div>
    )
}

export default Like;