import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { addToCart } from '../Store/cartSlice';
import Button from '../componets/Button';

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
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const products = [
  { id: 1, name: 'Espresso', price: 2.5, image: 'https://img.freepik.com/free-photo/caramel-latte-with-chocolade-table_140725-4.jpg?t=st=1727759794~exp=1727763394~hmac=c764d48b2b28767da2c6b996ec20e0d6a5857c19724850db5e46498687e16225&w=740' },
  { id: 2, name: 'Cappuccino', price: 3.5, image: 'https://img.freepik.com/free-photo/delicious-organic-latte-macchiato-with-milk_23-2148420329.jpg?t=st=1727761406~exp=1727765006~hmac=10f2d9d7a08693daef2ef87ff4edd99d5bc33e1813adb65c8628d088268239b5&w=1380 ' },
  { id: 3, name: 'Latte', price: 4, image: 'https://img.freepik.com/free-photo/cold-chocolate-cocktail-with-ice-cream_140725-940.jpg?t=st=1727759865~exp=1727763465~hmac=ad44e2430bff005bce4db484fbef6f2ec22f05b97b41c8c6c28ecb8508c2d909&w=740 ' },
  { id: 4, name: 'Mocha', price: 4.5, image: 'https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691385.jpg?t=st=1727759888~exp=1727763488~hmac=ea5484acf51753db6069801c3df0caa601e5d09a2265109ba218d040acb3e53c&w=1380  ' },
  { id: 5, name: 'Americano', price: 3, image: 'https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691389.jpg?t=st=1727759909~exp=1727763509~hmac=615986b69635b1e5a35b3a09347203d49046878d7525a9588f94211a3947ff58&w=1380  ' },
  { id: 6, name: 'Macchiato', price: 3.5, image: 'https://img.freepik.com/free-photo/assortment-with-frappe-dark-background_23-2148436976.jpg?t=st=1727761354~exp=1727764954~hmac=20b5ddf356f56d12e139084bc8e2c14ad3c71677269de9680db9dc4d09250774&w=740 ' },
  
  { id: 2, name: 'Turkish Coffee', price: 3, image: 'https://img.freepik.com/premium-photo/pouring-turkish-coffee_772702-2136.jpg?w=360' },
  { id: 2, name: 'Flat white', price: 5.5, image: 'https://static.toiimg.com/thumb/86699095.cms?imgsize=59654&width=509&height=340 ' },
  { id: 2, name: 'Nitro Cold Brew', price: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZcJOr1zaqJ-TkW9Ie1PcNRRrgPDnNSgX9A&s ' },
  { id: 3, name: 'Doppio', price: 3.4, image: 'https://lifeboostcoffee.com/cdn/shop/articles/Doppio_Espresso_Macchiato.jpg?v=1655197439 ' },
  { id: 3, name: 'Viennese Coffee', price: 4, image: 'https://irepo.primecp.com/2015/10/241007/Vienna-Coffee-01-12-07-OR_Category-CategoryPageDefault_ID-1242862.jpg?v=1242862 ' },
  { id: 3, name: 'Ristretto', price: 5.2, image: 'https://www.castironketo.net/wp-content/uploads/2023/10/is-ristretto-keto-friendly-header-image.jpg ' },
  { id: 3, name: 'Red Eye', price: 6.2, image: 'https://www.sessioncoffeedenver.com/wp-content/uploads/2024/04/what-is-a-red-eye-coffee.jpg ' },
  { id: 3, name: 'Frappé', price: 8.2, image: 'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_860,ar_3:2/v1/img/recipes/23/29/18/x38TQCFcRRiV1FJYbTLP_coffeefrappe2.jpg' },
  { id: 3, name: 'Affogato', price: 8.6, image: 'https://static.wixstatic.com/media/6a3e8d_23b343395c7c47feab983d124cc9b4ce~mv2.jpg/v1/fill/w_568,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6a3e8d_23b343395c7c47feab983d124cc9b4ce~mv2.jpg' },
  { id: 3, name: 'Cortado', price: 6, image: 'https://cdn.shopify.com/s/files/1/0677/6524/0096/files/coffee-in-a-glass-2022-11-02-18-50-07-utc_600x600.jpg?v=1683831169' },
  { id: 3, name: 'Café au lait', price: 3.8, image: 'https://blackturtlecoffee.com/cdn/shop/articles/Cafe-Au-Lait-004.jpg?v=1672848240'},
  { id: 3, name: 'Café Bombón', price: 4.6, image: 'https://www.theworktop.com/wp-content/uploads/2021/11/cafe-bombon.jpg'},
  { id: 2, name: 'Chai', price: 7.3, image: 'https://img.freepik.com/free-photo/frappe-glass-slices-bread-with-seeds_23-2148623233.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid' },
  { id: 2, name: 'Lemon Tea', price: 4.1, image: 'https://img.freepik.com/free-photo/cup-hot-mint-tea_144627-34462.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid ' },
  { id: 2, name: 'Green Tea', price: 3.4, image: 'https://img.freepik.com/free-photo/cup-green-tea_144627-34463.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid ' },
  { id: 2, name: 'Black Tea', price: 4.5, image: 'https://img.freepik.com/free-photo/cup-black-tea_144627-34464.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid ' },
  { id: 2, name: 'Herbal Tea', price: 5.5, image: 'https://img.freepik.com/premium-photo/black-tea-cup-glass-mint-tea-leaves-white-isolated_127657-17608.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid ' },
  { id: 2, name: 'Iced Tea', price: 5.6, image: 'https://img.freepik.com/free-vector/long-island-ice-tea-cocktail-realistic_1284-3888.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid ' },
  { id: 3, name: 'Irish Coffee', price: 7.2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlPYx_StS2Y7x9s4hukcCyJZaDm54mgbe8g&s'},
  { id: 3, name: 'Strawberry smoothie', price: 6.2, image: 'https://www.eatingwell.com/thmb/TBp6lbiwoYPhRP4N__4sROiUDhA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mixed-berry-breakfast-smoothie-7959466-1x1-e0ad2304222e49508cda7b73b21de921.jpg'},
  { id: 3, name: 'Mango smoothie', price: 3.2, image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg'},
  { id: 3, name: 'Strawberry banana smoothie', price: 6.45, image: 'https://www.purelykaylie.com/wp-content/uploads/2023/07/strawberry-banana-smoothie-bowl-5.jpg'},
  { id: 3, name: 'Creamy, Nutty Coffee Smoothie', price: 7.2, image: 'https://www.seriouseats.com/thmb/dwKjOOPQu1ki3pSf1M4eB7FGVzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240206-SEA-Coffee-Smoothie-hero-27d1864a41cc411ea7ff0c64ada77a2e.jpg'},
  { id: 3, name: 'Coffee Smoothie', price: 6.3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Y9in1wQf-XCl9sdyuw5pXWT_CrYn8P5j7A&s'},
  { id: 3, name: 'Chocolate Milkshake', price: 5.2, image: 'https://www.sharmispassions.com/wp-content/uploads/2012/07/chocolate-milkshake1.jpg'},
  { id: 3, name: 'Oreo Milkshake', price: 5.2, image: 'https://www.solara.in/cdn/shop/articles/Oreo_Milkshake.jpg?v=1715757748&width=2048'},
  { id: 3, name: 'Strawberry Oreo Milkshake', price: 2.6, image: 'https://marleysmenu.com/wp-content/uploads/2021/08/Strawberry-Oreo-Milkshake-Featured-Image.jpg'},
  { id: 3, name: 'Mixed Nut and Fruit Milkshake', price: 8.2, image: 'https://images.mrcook.app/recipe-image/018d50f7-344f-7744-97e3-1f89e5a3cf29'},
  { id: 3, name: 'Peanut Butter Milkshake', price: 5.8, image: 'https://www.julieseatsandtreats.com/wp-content/uploads/2021/08/Peanut-Butter-Milkshake-Square.jpg'},
  { id: 3, name: 'Oreo cheese cake', price: 9.2, image: 'https://handletheheat.com/wp-content/uploads/2015/11/oreo-cheesecake-recipe-SQUARE.jpg'},
  { id: 3, name: 'Chocolate cake', price: 7.2, image: 'https://img.freepik.com/free-photo/chocolate-cake_1203-8942.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid'},
  { id: 3, name: 'Red velvet cake', price: 4.2, image: 'https://img.freepik.com/free-photo/top-view-red-strawberry-cake-delicious-with-tea-table-fruit-color-cake-biscuit-sweet_140725-28319.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid'},
  { id: 3, name: 'Cheese cake', price: 8.2, image: 'https://img.freepik.com/premium-photo/citrus-cheesecake-cake-with-kumquats_82780-1574.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid'},
  { id: 3, name: 'Blueberry cake', price: 3.2, image: 'https://img.freepik.com/premium-photo/pieces-pie-from-cottage-cheese-blueberries_116441-1516.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid'},
  { id: 3, name: 'Strawberry cake', price: 6, image: 'https://img.freepik.com/free-photo/delicious-cake-with-strawberries_23-2150797874.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid'},
  { id: 3, name: 'Salad', price: 7.3, image: 'https://img.freepik.com/free-photo/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts_2829-20128.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid'},
  { id: 3, name: 'Tomato soup', price: 6.7, image: 'https://img.freepik.com/free-photo/portrait-shooting-tomato-soup-with-crackers-cheese-tomatoes-bread-table_141793-2858.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid'},
  { id: 3, name: 'Chicken Noodle soup', price: 8.2, image: 'https://img.freepik.com/free-photo/delicious-noodle-soup-with-chicken-uncooked-pasta-small-brown-bowl-spoon-garlic-dark-background_140725-140085.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid'},
  { id: 3, name: 'Miso soup', price: 7.5, image: 'https://img.freepik.com/free-photo/top-view-japanese-food-bowls-arrangement_23-2148809848.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid'},
  { id: 3, name: 'Cold cucumber soup', price: 7.34, image: 'https://img.freepik.com/free-photo/cold-cucumber-soup-with-dried-tomatoes-mozzarella_2829-14287.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid'},
  { id: 3, name: 'Tom Yum Soup', price: 9.2, image: 'https://img.freepik.com/free-photo/tom-yum-kung-thai-hot-spicy-soup-shrimp-with-lemon-grass-lemon-galangal-chilli-wooden-table-thailand-food_1150-21078.jpg?ga=GA1.1.900909129.1729318722&semt=ais_hybrid'},
]

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
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ShopContainer>
  );
}

export default Shop;