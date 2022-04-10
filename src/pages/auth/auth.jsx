import React from 'react';
import './auth.css';

import LoginForm from '../../components/loginForm/loginForm';

function Auth() {
  return (
    <div className="auth-page__wrapper">
      <div className="auth-page">
        <LoginForm />
      </div>
    </div>
  );
}

export default Auth;
