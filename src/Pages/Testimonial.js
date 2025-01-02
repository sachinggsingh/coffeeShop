import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialSection = styled.div`
  background-color: #fffbeb;
  padding: 6rem 2rem 4rem;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #78350f;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselInner = styled.div`
  width: 100%;
`;

const CarouselRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #92400e;
  }
`;

const TestimonialContent = styled.div`
  text-align: center;
  
  h2 {
    color: #78350f;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .stars {
    color: #f59e0b;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #92400e;
    line-height: 1.6;
    font-style: italic;
  }
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  
  button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.active ? '#78350f' : '#d6d3d1'};
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #92400e;
    }
  }
`;

const CarouselControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #78350f;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
  
  &.prev {
    left: -2rem;
  }
  
  &.next {
    right: -2rem;
  }
`;

function Testimonial() {
  return (
    <TestimonialSection>
      <Container>
        <Title>What Our Customers Say</Title>
        <CarouselContainer id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <CarouselInner className="carousel-inner">
            <div className="carousel-item active">
              <CarouselRow>
                <TestimonialCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageContainer>
                    <img src="https://images.unsplash.com/photo-1592493552901-9f0ef0d6f702?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Devolina" />
                  </ImageContainer>
                  <TestimonialContent>
                    <h2>Devolina</h2>
                    <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                    <p>"Best coffee in town! The aroma of freshly brewed coffee hits you the moment you walk in. Their baristas are true artists, and every cup is a masterpiece."</p>
                  </TestimonialContent>
                </TestimonialCard>

                <TestimonialCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ImageContainer>
                    <img src="https://plus.unsplash.com/premium_photo-1670884522719-d7f4bcdfcbeb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Priya Jha" />
                  </ImageContainer>
                  <TestimonialContent>
                    <h2>Priya Jha</h2>
                    <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                    <p>"A hidden gem! This coffee shop not only has a fantastic selection of drinks but also a mouth-watering array of pastries."</p>
                  </TestimonialContent>
                </TestimonialCard>

                <TestimonialCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <ImageContainer>
                    <img src="https://images.unsplash.com/photo-1679673988162-018d0400240e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hellan" />
                  </ImageContainer>
                  <TestimonialContent>
                    <h2>Hellan</h2>
                    <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                    <p>"Perfect spot to unwind. The music is just the right volume, the seating is comfortable, and there's always a good mix of people."</p>
                  </TestimonialContent>
                </TestimonialCard>
              </CarouselRow>
            </div>

            <div className="carousel-item">
              <CarouselRow>
                <TestimonialCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageContainer>
                    <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="David" />
                  </ImageContainer>
                  <TestimonialContent>
                    <h2>David</h2>
                    <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                    <p>"The attention to detail here is exceptional. From the latte art to the friendly service, everything is top-notch. A must-visit for coffee lovers!"</p>
                  </TestimonialContent>
                </TestimonialCard>

                <TestimonialCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ImageContainer>
                    <img src="https://images.unsplash.com/photo-1622020920816-cd528763211a?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="John" />
                  </ImageContainer>
                  <TestimonialContent>
                    <h2>John</h2>
                    <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                    <p>"Great atmosphere for working or meeting friends. The WiFi is reliable, and their seasonal drink specials are always creative and delicious."</p>
                  </TestimonialContent>
                </TestimonialCard>

                <TestimonialCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <ImageContainer>
                    <img src="https://images.unsplash.com/photo-1709863990963-30e6d4e9cacc?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sandy" />
                  </ImageContainer>
                  <TestimonialContent>
                    <h2>Sandy</h2>
                    <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                    <p>"The staff here is incredibly knowledgeable about coffee. They're always happy to explain different brewing methods and help you find your perfect cup."</p>
                  </TestimonialContent>
                </TestimonialCard>
              </CarouselRow>
            </div>
          </CarouselInner>
          
          <CarouselControlButton className="prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true">‹</span>
          </CarouselControlButton>
          
          <CarouselControlButton className="next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true">›</span>
          </CarouselControlButton>
          
          <CarouselControls>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </CarouselControls>
        </CarouselContainer>
      </Container>
    </TestimonialSection>
  );
}

export default Testimonial;