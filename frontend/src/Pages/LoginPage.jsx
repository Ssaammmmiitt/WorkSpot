
import React, { useEffect, useState } from 'react';
import Login from '../Components/Form/Login';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthProvider';



const LoginPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div>
     <Login />
    </div>
  );
};

export default LoginPage;
