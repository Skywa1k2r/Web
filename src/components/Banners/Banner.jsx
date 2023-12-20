import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src="https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww" className='rounded'/>
                    <p className="legend">Product 1</p>
                </div>
                <div>
                    <img src="https://images.solecollector.com/complex/image/upload/f_auto,fl_lossy,q_auto,w_1200/tgenialesneakers-nike-flyknit-racer-multicolor-3.0_zpzris.jpg" className='rounded'/>
                    <p className="legend">Product 2</p>
                </div>
                <div>
                    <img src="https://c4.wallpaperflare.com/wallpaper/1013/279/768/woman-runner-sports-shoes-outdoor-activities-wallpaper-preview.jpg" className='rounded'/>
                    <p className="legend">Product 3</p>
                </div>
            </Carousel>
    )
}

export default Banner;