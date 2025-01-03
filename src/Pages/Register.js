import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Store/authSlice';

const RegisterBackGround = styled.section`
  background-image: url('https://img.freepik.com/free-photo/hot-latte-art-coffee-cup-wood-table-coffee-shop_1150-8937.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  backdrop-filter: blur(8px);
`;

const RegisterForm = styled(motion.form)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  width: 350px;
  text-align: center;
  opacity: 1;  // Ensure the form is fully visible
  transition: opacity 0.6s ease-in-out; // Smooth fade-in effect
`;

const Heading = styled.h2`
  margin-bottom: 1.5rem;
  color: #7c2214;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.25rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.3s;
  opacity: 1;  // Ensure inputs are visible

  &:focus {
    border-color: #7c2214;
    box-shadow: 0 0 4px rgba(124, 34, 20, 0.5);
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  background-color: #7c2214;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5b190f;
  }
`;

const LoginLink = styled(Link)`
  display: block;
  margin-top: 1.25rem;
  font-size: 0.9rem;
  color: #7c2214;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    color: #5b190f;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1rem;
  color: green;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  margin-top: 1rem;
  color: red;
  font-weight: bold;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    localStorage.setItem('user', JSON.stringify(formData));
    dispatch(login({ username: formData.username, email: formData.email }));
    setIsSubmitted(true);
    setError('');
    setTimeout(() => {
      navigate('/profile');
    }, 2000);
  };

  return (
    <RegisterBackGround>
      <RegisterContainer>
        <RegisterForm
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <Heading>Register</Heading>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03 }}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03 }}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03 }}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03 }}
          />
          <Button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {isSubmitted && <SuccessMessage>Registration successful!</SuccessMessage>}
          <LoginLink to="/login">Already have an account? Login</LoginLink>
        </RegisterForm>
      </RegisterContainer>
    </RegisterBackGround>
  );
};

export default Register;
