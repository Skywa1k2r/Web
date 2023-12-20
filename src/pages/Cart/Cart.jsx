import React, { useEffect, useState } from 'react';


const Cart = () => {
    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        const storedBasket = JSON.parse(localStorage.getItem('cart')) || [];
        setBasketItems(storedBasket);
    }, []);

    const calculateTotalPrice = () => {
        return basketItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const handleRemoveFromBasket = (itemName) => {
        const updatedBasket = basketItems.filter(item => item.name !== itemName);
        setBasketItems(updatedBasket);
        localStorage.setItem('cart', JSON.stringify(updatedBasket));
    };
    return (
        <div className="container mt-4">
            <div className="container my-5">
                <h2>Your Basket</h2>
                {basketItems.length === 0 ? (
                    <p>Your basket is empty.</p>
                ) : (
                    <div>
                        {basketItems.map(item => (
                            <div key={item.name} className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.img} alt={item.name} className="img-fluid rounded-start" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text"><small className="text-muted">${item.price.toFixed(2)}</small></p>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleRemoveFromBasket(item.name)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <p>Total Price: ${calculateTotalPrice()}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart;