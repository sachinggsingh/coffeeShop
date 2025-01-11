import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${(props) => (props.darkMode ? '#121212' : '#f4f4f4')};
    color: ${(props) => (props.darkMode ? '#fff' : '#333')};
    transition: all 0.3s ease;
  }
`;

const ProfileContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: ${(props) => (props.darkMode ? '#fff' : '#333')};
  margin-top: 2rem;
`;

const ProfileInfo = styled(motion.div)`
  background-color: ${(props) => (props.darkMode ? '#1f1f1f' : '#ffffff')};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProfilePicture = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  background-image: url(${(props) => props.src || '/images/placeholder-avatar.png'});
  background-size: cover;
  background-position: center;
  background-color: ${(props) => (props.src ? 'transparent' : '#dcdcdc')};
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const Label = styled.span`
  font-weight: 500;
  margin-right: 0.5rem;
  color: ${(props) => (props.darkMode ? '#bbb' : '#555')};
`;

const OrderHistory = styled(motion.div)`
  width: 100%;
  margin-top: 2rem;
  padding: 2rem;
  background-color: ${(props) => (props.darkMode ? '#1f1f1f' : '#fff')};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Order = styled.div`
  background-color: ${(props) => (props.darkMode ? '#333' : '#fff')};
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const DarkModeToggle = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${(props) => (props.darkMode ? '#fff' : '#333')};
  color: ${(props) => (props.darkMode ? '#333' : '#fff')};
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    opacity: 0.8;
  }
`;

// Button Component
const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#007bff' : '#ccc')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  font-size: 1.1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: ${(props) => (props.primary ? '#0056b3' : '#bbb')};
    transform: translateY(-2px);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.darkMode ? '#555' : '#ccc')};
  background-color: ${(props) => (props.darkMode ? '#333' : '#fff')};
  color: ${(props) => (props.darkMode ? '#fff' : '#333')};
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
`;

function Profile() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');

  const orderHistory = [
    { id: 1, date: '2023-05-01', total: 15.99 },
    { id: 2, date: '2023-05-15', total: 24.99 },
    { id: 3, date: '2023-05-30', total: 19.99 },
  ];

  const handleSave = () => {
    // You can dispatch an action to update the user information here
    // Example: dispatch(updateUser({ name, email }));
    setEditing(false);
  };

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <DarkModeToggle darkMode={darkMode} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌙' : '🌞'}
      </DarkModeToggle>
      <ProfileContainer>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          darkMode={darkMode}
        >
          Your Profile
        </Title>
        <ProfileInfo
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          darkMode={darkMode}
        >
          <ProfilePicture src={user?.profilePicture} />
          {editing ? (
            <>
              <InfoItem>
                <Label darkMode={darkMode}>Name:</Label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  darkMode={darkMode}
                />
              </InfoItem>
              <InfoItem>
                <Label darkMode={darkMode}>Email:</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  darkMode={darkMode}
                />
              </InfoItem>
              <Button primary onClick={handleSave}>
                Save
              </Button>
            </>
          ) : (
            <>
              <InfoItem>
                <Label darkMode={darkMode}>Name:</Label>
                {user?.username || 'N/A'}
              </InfoItem>
              <InfoItem>
                <Label darkMode={darkMode}>Email:</Label>
                {user?.email || 'N/A'}
              </InfoItem>
              <Button onClick={() => setEditing(true)}>Edit Profile</Button>
            </>
          )}
        </ProfileInfo>
        <OrderHistory
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          darkMode={darkMode}
        >
          <h2>Order History</h2>
          {orderHistory.map((order) => (
            <Order key={order.id} darkMode={darkMode}>
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
            </Order>
          ))}
        </OrderHistory>
      </ProfileContainer>
    </>
  );
}

export default Profile;
