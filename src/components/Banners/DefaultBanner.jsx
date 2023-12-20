import React from 'react';
import { Carousel } from 'react-bootstrap';

const DefaultBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w- rounded" src="https://www.verywellfit.com/thmb/2Pey0KqAgXTv8ioEnOXCuY5P2Ok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VWFit-Running-Shoe-Journey-Signs-Your-Running-Shoes-Need-to-Be-Replaced-5525492-edit-a43e328142854bd3ac7c87dc21e8f462.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 rounded" src="https://www.lemassif.com/sites/default/files/styles/scale_1440/public/2022-08/Course%20en%20sentier%20automne.jpg?itok=rcbwaCrH" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 rounded" src="https://as1.ftcdn.net/v2/jpg/02/07/92/80/1000_F_207928043_CfS9KgW2M7O1mKdKBNOvpPOaES7HTytV.jpg" alt="First slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default DefaultBanner;