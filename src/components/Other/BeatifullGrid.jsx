import React, { useEffect, useState } from 'react';

const Grid = () => {
    return (
        <div className="container mx-auto">
            <div className="row">
                <div className="col-md-8 mt-2">
                    <img src="https://www.feetbypody.com/wp-content/uploads/2019/07/Sports-shoes.jpg" alt="" className='img-fluid w-100 rounded' />

                </div>
                <div className="col-md-4 mt-2">
                    <img src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/979075/1.jpg?6412" alt="" className='img-fluid w-100 rounded' />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6 mt-2">
                    <img src="https://www.jiomart.com/images/product/original/rvpnqq3cqg/stylish-black-489-sports-shoe-for-men-s-boys-product-images-rvpnqq3cqg-0-202207061615.jpg?im=Resize=(500,630)" alt="" className='img-fluid w-100 rounded' />
                </div>
                <div className="col-md-6 mt-2">
                    <img src="https://www.jiomart.com/images/product/original/rvmoy2ln1q/roddick-shoes-stylish-white-shoes-for-walking-sport-shoes-for-men-product-images-rvmoy2ln1q-0-202303102105.jpg?im=Resize=(600,750)" alt="" className='img-fluid w-100 rounded' />
                </div>
            </div>
        </div>
    );
}

export default Grid