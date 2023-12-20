import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Product from '../../components/Cards/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/db/products.json');
        const data = await response.json();

        // Filter products based on the search term
        const filteredProducts = data.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <div className="container row bg-light rounded p-3 mx-auto">
      <h2 className="text-center">Our Catalog</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))
      ) : (
        <p className='btn'>No products with name "{searchTerm}".</p>
      )}
      <Link to="/products" className='btn btn-primary '>Back to All Products</Link>
    </div>
  );
};

export default Products;
