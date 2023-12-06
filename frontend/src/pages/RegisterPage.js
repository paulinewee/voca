// pages/RegisterPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../components/Auth/RegistrationForm';

const RegisterPage = ({ onRegister }) => {
  return (
    <div>
      <h2>Register Page</h2>
      <RegistrationForm onRegister={onRegister} />
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
