import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isInBasket, setIsInBasket] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/db/products.json`);
                const data = await response.json();
                const selectedProduct = data.find(product => product.id === parseInt(id, 10));

                setProduct(selectedProduct);
                
                const basketItems = JSON.parse(localStorage.getItem('cart')) || [];
                const isProductInBasket = basketItems.some(item => item.name === selectedProduct.name);
                setIsInBasket(isProductInBasket);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, [id]);


    const handleAddToBasket = () => {
        const basketItems = JSON.parse(localStorage.getItem('cart')) || [];
        basketItems.push({ name:product.name, price : product.price, img: product.img, description: product.description });
        localStorage.setItem('cart', JSON.stringify(basketItems));

        setIsInBasket(true);
    };

    const handleDeleteFromBasket = () => {
        const basketItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedBasket = basketItems.filter(item => item.name !== product.name);
        localStorage.setItem('cart', JSON.stringify(updatedBasket));

        setIsInBasket(false);
    };
    
    return (
        <div>
            {product ? (
                <div className='container row mx-auto my-5'>
                    <div className="col-md-6">
                        <img src={product.img} alt={product.name} className='img-fluid w-100' />

                    </div>
                    <div className="col md-6">
                        <h2>{product.name}</h2>
                        <hr />
                        <p>${product.price.toFixed(2)}</p>
                        <p>{product.description}</p>
                        {isInBasket ? (
                            <button className="btn btn-danger w-100" onClick={handleDeleteFromBasket}>
                                Delete from Cart
                            </button>
                        ) : (
                            <button className="btn btn-primary w-100" onClick={handleAddToBasket}>
                                Add to Cart
                            </button>
                        )}
                        <p className='mt-4'>
                            <button className="btn border border-light border-1 bg-light w-100" type="button" data-bs-toggle="collapse" data-bs-target="#other" aria-expanded="false" aria-controls="collapseExample">
                                Details
                            </button>
                        </p>
                        <div className="collapse" id="other">
                            <div className="card card-body">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Detail;