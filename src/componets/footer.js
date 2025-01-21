import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FooterImg from './FooterImg.png'; 

// Styled components for the footer
const FooterContainer = styled.footer`
background: linear-gradient(90deg, rgba(148, 93, 56, 1), rgba(56, 39, 16, 1));
color: #fffbeb;
padding: 1.5rem 2rem;
text-align: center;
position: relative;
bottom: 0;
width: 100%;
box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
max-width: 1200px;
margin: 0 auto;

p {
  margin: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.5;

  &:first-child {
    font-weight: 500;
  }
}

@media (max-width: 768px) {
  text-align: center;
  padding: 1rem;
}
`;

const InfoSection = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
margin: 2rem 0;
flex-wrap: wrap; /* Allow columns to wrap on smaller screens */

.infoimg {
  height: auto;
  max-height: 10rem;
  width: 100%;
  max-width: 10rem; /* Restrict size for smaller devices */
  margin-bottom: 1rem;
}

.info-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%; /* Ensure it adapts to smaller devices */
}

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;

  .infoimg {
    max-width: 8rem;
    max-height: auto;
  }

  .info-wrapper {
    justify-content: center;
    gap: 2rem;
  }
}
`;

const InfoColumn = styled.div`
flex: 1 1 calc(25% - 2rem); /* Flexible width with margin space */
margin: 0 1rem;
text-align: left;

h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ffd6a5;
}

p,
a {
  font-size: 0.9rem;
  color: #fffbeb;
  text-decoration: none;
  margin-bottom: 0.5rem;
  display: block;
}

a:hover {
  color: #fbbf24;
  text-decoration: underline;
}

@media (max-width: 768px) {
  flex: 1 1 100%; /* Full width on smaller devices */
  text-align: center;
}
`;

const SocialIcons = styled.div`
display: flex;
justify-content: center;
gap: 1rem;
margin-top: 1.5rem;

@media (max-width: 768px) {
  gap: 1.2rem;
}
`;

const SocialIcon = styled(motion.a)`
color: #fffbeb;
font-size: 1.8rem;
text-decoration: none;
padding: 0.5rem;
border-radius: 50%;
transition: color 0.3s ease, transform 0.3s ease;

&:hover {
  transform: scale(1.2);
  color: #fbbf24;
}

&[href*="facebook.com"]:hover {
  color: #3b5998; /* Facebook Blue */
}

&[href*="twitter.com"]:hover {
  color: #1da1f2; /* Twitter Blue */
}

&[href*="instagram.com"]:hover {
  color: #e4405f; /* Instagram Pink */
}

&[href*="linkedin.com"]:hover {
  color: #0077b5; /* LinkedIn Blue */
}

@media (max-width: 768px) {
  font-size: 1.3rem;
}
`;

const Divider = styled.hr`
border: none;
height: 2px;
background: #ffd6a5;
margin: 2rem auto;
width: 80%; /* Adjust width for responsiveness */
`;



function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Social Icons */}
        <SocialIcons>

          <SocialIcon
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Facebook">
            <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
          </SocialIcon>

          <SocialIcon
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="LinkedIn"
            role="link">
          <i className="fab fa-linkedin-in"></i>  {/* LinkedIn icon */}
          </SocialIcon>

          <SocialIcon
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Twitter"
            role="link">
            <i className="fab fa-twitter"></i>  {/* Twitter icon */}
          </SocialIcon>

      

          <SocialIcon
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i> {/* Instagram icon */}
          </SocialIcon>

          <SocialIcon
            href="https://github.com/Mujtabaa07/coffeeShop"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="GitHub"
            role="link"
          >
            <i className="fab fa-github"></i> {/* GitHub icon */}
          </SocialIcon>

        </SocialIcons>

        {/* Divider */}
        <Divider />

        {/* Informational Sections */}
        <InfoSection>
        <img src={FooterImg} alt="Footer" className="infoimg"/>
        <div className="info-wrapper">
        <InfoColumn>
            <h3>About Us</h3>
            <p>
              Founded in 2010, MsCafe is dedicated to serving the finest coffee
              with passion and expertise. We source our beans from sustainable
              farms across the globe.
            </p>
          </InfoColumn>
          <InfoColumn>
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/contributor">Contributors</Link>
          </InfoColumn>
          <InfoColumn>
            <h3>Contact Us</h3>
            <p><a href="mailto:contact@mscafe.com">✉️ contact@mscafe.com</a></p>
            <p><a href="tel:+11234567890">☎️ (123) 456-7890</a></p>
          </InfoColumn>
          <InfoColumn>
            <h3>Location</h3>
            <p>123 Coffee St, Bean Town, USA</p>
            <p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Map
              </a>
            </p>
          </InfoColumn>
        </div>
        
        </InfoSection>

        {/* Footer Text */}
        <p>&copy; {new Date().getFullYear()} MsCafe. All rights reserved.</p>
        <p>Made with ♥ by MsCoder</p>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
