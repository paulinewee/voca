// pages/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onLogin={onLogin} />
      <p>
        New user? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
