import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { addToCart } from '../Store/cartSlice';

const ShopContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled(motion.div)`
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -2px -2px 8px rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.15), -4px -4px 12px rgba(255, 255, 255, 0.9);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #4a2c2a;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledButton = styled.button`
  background: linear-gradient(145deg, #6b4f4f, #7d5858);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  letter-spacing: 0.6px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(145deg, #7d5858, #8e6a6a);
    transform: scale(1.05);
  }
    
  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); 
  }
`;

const products = [
  { id: 1, name: 'Espresso', price: 2.5, image: 'https://img.freepik.com/free-photo/caramel-latte-with-chocolade-table_140725-4.jpg?t=st=1727759794~exp=1727763394~hmac=c764d48b2b28767da2c6b996ec20e0d6a5857c19724850db5e46498687e16225&w=740' },
  { id: 2, name: 'Cappuccino', price: 3.5, image: 'https://img.freepik.com/free-photo/delicious-organic-latte-macchiato-with-milk_23-2148420329.jpg?t=st=1727761406~exp=1727765006~hmac=10f2d9d7a08693daef2ef87ff4edd99d5bc33e1813adb65c8628d088268239b5&w=1380 ' },
  { id: 3, name: 'Latte', price: 4, image: 'https://img.freepik.com/free-photo/cold-chocolate-cocktail-with-ice-cream_140725-940.jpg?t=st=1727759865~exp=1727763465~hmac=ad44e2430bff005bce4db484fbef6f2ec22f05b97b41c8c6c28ecb8508c2d909&w=740 ' },
  { id: 4, name: 'Mocha', price: 4.5, image: 'https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691385.jpg?t=st=1727759888~exp=1727763488~hmac=ea5484acf51753db6069801c3df0caa601e5d09a2265109ba218d040acb3e53c&w=1380  ' },
  { id: 5, name: 'Americano', price: 3, image: 'https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691389.jpg?t=st=1727759909~exp=1727763509~hmac=615986b69635b1e5a35b3a09347203d49046878d7525a9588f94211a3947ff58&w=1380  ' },
  { id: 6, name: 'Macchiato', price: 3.5, image: 'https://img.freepik.com/free-photo/assortment-with-frappe-dark-background_23-2148436976.jpg?t=st=1727761354~exp=1727764954~hmac=20b5ddf356f56d12e139084bc8e2c14ad3c71677269de9680db9dc4d09250774&w=740 ' },
  { id: 7, name: 'Chai', price: 3, image: 'https://img.freepik.com/free-photo/frappe-glass-slices-bread-with-seeds_23-2148623233.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid' },
  { id: 8, name: 'Lemon Tea', price: 3.5, image: 'https://img.freepik.com/free-photo/cup-hot-mint-tea_144627-34462.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid ' },
];

function Shop() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <ShopContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Coffee Selection
      </Title>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <StyledButton onClick={() => handleAddToCart(product)}>Add to Cart</StyledButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ShopContainer>
  );
}

export default Shop;