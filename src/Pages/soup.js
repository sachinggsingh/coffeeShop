import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../Store/cartSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SoupContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem; // Added top padding for navbar
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb; // Warm background color
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1100px; // Slightly reduced to center content more
  margin: 0 auto;
`;
const ProductCard = styled(motion.div)`
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -2px -2px 8px rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.15), -4px -4px 12px rgba(255, 255, 255, 0.9);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1.25rem;
  background-color: white;
`;

const ProductName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  box-sizing: border-box;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #4a2c2a;
  margin-bottom: 1rem;
  font-weight: 600;
`;
const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #78350f; // Warm brown color
`;
const Button = styled.button`
  background: #78350f;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 0.6px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background:#78350f;
    transform: scale(1.05);
  }
    
  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); 
  }
`;

const StyledButton = styled.button`
  background: linear-gradient(145deg, #6b4f4f, #7d5858);
  color: white;
  margin-left: 3rem;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  cursor: pointer;
  letter-spacing: 0.6px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;

  .CartBtn {
    width: 140px;
    height: 40px;
    border-radius: 12px;
    border: none;
    background-color: rgb(255, 208, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: .5s;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
  }

  .IconContainer {
    position: absolute;
    left: -50px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 2;
    transition-duration: .5s;
  }

  .icon {
    border-radius: 1px;
  }

  .text {
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(17, 17, 17);
    z-index: 1;
    transition-duration: .5s;
    font-size: 1.04em;
    font-weight: 600;
  }

  .CartBtn:hover .IconContainer {
    transform: translateX(58px);
    border-radius: 40px;
    transition-duration: .5s;
  }

  .CartBtn:hover .text {
    transform: translate(10px,0px);
    transition-duration: .5s;
  }

  .CartBtn:active {
    transform: scale(0.95);
    transition-duration: .5s;
  }
`;

const StyledWrapper = styled.div`
  .heart-container {
    --heart-color: maroon;
    position: relative;
    width: 50px;
    height: 40px;
    transition: .3s;
    z-index:100;
  }

  .heart-container .checkbox {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 20;
    cursor: pointer;
  }

  .heart-container .svg-container {
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heart-container .svg-outline,
  .heart-container .svg-filled {
    fill: var(--heart-color);
    position: absolute;
  }

  .heart-container .svg-filled {
    animation: keyframes-svg-filled 1s;
    display: none;
  }

  .heart-container .svg-celebrate {
    position: absolute;
    animation: keyframes-svg-celebrate .5s;
    animation-fill-mode: forwards;
    display: none;
    stroke: var(--heart-color);
    fill: var(--heart-color);
    stroke-width: 2px;
  }

  .heart-container .checkbox:checked~.svg-container .svg-filled {
    display: block
  }

  .heart-container .checkbox:checked~.svg-container .svg-celebrate {
    display: block
  }

  @keyframes keyframes-svg-filled {
    0% {
      transform: scale(0);
    }

    25% {
      transform: scale(1.2);
    }

    50% {
      transform: scale(1);
      filter: brightness(1.5);
    }
  }

  @keyframes keyframes-svg-celebrate {
    0% {
      transform: scale(0);
    }

    50% {
      opacity: 1;
      filter: brightness(1.5);
    }

    100% {
      transform: scale(1.4);
      opacity: 0;
      display: none;
    }
  }
`;

const ProductInfo1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const QuantityButton = styled(Button)`
  padding: 5px 10px;
  min-width: 30px;
`;

const QuantityDisplay = styled.span`
  font-weight: bold;
  min-width: 20px;
  text-align: center;
`;
const products = [
    {
        id: 42,
        name: "Salad",
        price: 7.3,
        image:
          "https://img.freepik.com/free-photo/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts_2829-20128.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
        description:
          "Fresh and healthy, a mix of greens, vegetables, and a tangy dressing, perfect for a light meal.",
      },
      {
        id: 43,
        name: "Tomato soup",
        price: 6.7,
        image:
          "https://img.freepik.com/free-photo/portrait-shooting-tomato-soup-with-crackers-cheese-tomatoes-bread-table_141793-2858.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
        description:
          "Warm and comforting, a classic tomato soup perfect for a cozy meal, often served with grilled cheese.",
      },
      {
        id: 44,
        name: "Chicken Noodle soup",
        price: 8.2,
        image:
          "https://img.freepik.com/free-photo/delicious-noodle-soup-with-chicken-uncooked-pasta-small-brown-bowl-spoon-garlic-dark-background_140725-140085.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
        description:
          "Hearty and soothing, a classic soup with chicken, noodles, and vegetables, perfect for cold days.",
      },
      {
        id: 45,
        name: "Miso soup",
        price: 7.5,
        image:
          "https://img.freepik.com/free-photo/top-view-japanese-food-bowls-arrangement_23-2148809848.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
        description:
          "Savory and umami-rich, a traditional Japanese soup made with miso paste and dashi broth.",
      },
      {
        id: 46,
        name: "Cold cucumber soup",
        price: 7.34,
        image:
          "https://img.freepik.com/free-photo/cold-cucumber-soup-with-dried-tomatoes-mozzarella_2829-14287.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
        description:
          "Refreshing and cool, a chilled soup made with cucumbers, yogurt, and herbs, perfect for summer.",
      },
      {
        id: 47,
        name: "Tom Yum Soup",
        price: 9.2,
        image:
          "https://img.freepik.com/free-photo/tom-yum-kung-thai-hot-spicy-soup-shrimp-with-lemon-grass-lemon-galangal-chilli-wooden-table-thailand-food_1150-21078.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid",
        description:
          "Spicy and aromatic, a Thai soup with lemongrass, kaffir lime leaves, and chilies, often with shrimp.",
      },
];

function Soup() {
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product) => {
    if (!quantities[product.id]) {
      setQuantities({
        ...quantities,
        [product.id]: 1
      });
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleIncrement = (product) => {
    const newQuantity = (quantities[product.id] || 0) + 1;
    setQuantities({
      ...quantities,
      [product.id]: newQuantity
    });
    dispatch(addToCart({ ...product, quantity: newQuantity }));
  };

  const handleDecrement = (product) => {
    if (quantities[product.id] > 1) {
      const newQuantity = quantities[product.id] - 1;
      setQuantities({
        ...quantities,
        [product.id]: newQuantity
      });
      dispatch(addToCart({ ...product, quantity: newQuantity }));
    } else {
      setQuantities({
        ...quantities,
        [product.id]: 0
      });
      dispatch(removeFromCart(product.id));
    }
  };

  return (
    <SoupContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Soupshake Selection
      </Title>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              {!quantities[product.id] ? (
                <Button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              ) : (
                <QuantityControls>
                  <QuantityButton onClick={() => handleDecrement(product)}>-</QuantityButton>
                  <QuantityDisplay>{quantities[product.id]}</QuantityDisplay>
                  <QuantityButton onClick={() => handleIncrement(product)}>+</QuantityButton>
                </QuantityControls>
              )}
              <StyledButton onClick={() => handleAddToCart(product)}>Buy Now</StyledButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </SoupContainer>
  );
}

export default Soup;
  

