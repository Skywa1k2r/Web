import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ id, img, name, price, description }) => {
    const [isInBasket, setIsInBasket] = useState(false);

    useEffect(() => {
        const basketItems = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductInBasket = basketItems.some(item => item.name === name);
        setIsInBasket(isProductInBasket);

    }, [name]);

    const handleAddToBasket = () => {
        const basketItems = JSON.parse(localStorage.getItem('cart')) || [];
        basketItems.push({ name, price, img, description });
        localStorage.setItem('cart', JSON.stringify(basketItems));

        setIsInBasket(true);
    };

    const handleDeleteFromBasket = () => {
        // Delete the product from the Basket
        const basketItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedBasket = basketItems.filter(item => item.name !== name);
        localStorage.setItem('cart', JSON.stringify(updatedBasket));

        setIsInBasket(false);
    };

    return (
        <div className="col-md-4">

            <div className="item-container mx-auto">
                <div className="main-item mx-auto">
                    <img src={img} alt="" className='rounded' />
                </div>
                <Link className='text-decoration-none text-dark' to={`/product/${id}`}>
                    <h2 className="item-heading">
                        {name}
                    </h2>
                </Link>
                <p className="item-description">
                    {description}
                </p>
                <ul className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                </ul>
                <p className="item-price"><sup>$</sup>{price}/-</p>
                {isInBasket ? (
                    <button className="btn btn-danger" onClick={handleDeleteFromBasket}>
                        Delete from Cart
                    </button>
                ) : (
                    <button className="btn btn-primary" onClick={handleAddToBasket}>
                        Add to Cart
                    </button>
                )}
            </div>

        </div >
    )
}

export default Product;