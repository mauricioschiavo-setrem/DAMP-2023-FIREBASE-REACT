import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../components/Login';

export function LoginPage() {
  return (
    <div className="box-login">
      <h1>Login</h1>
      <Login />
      <Link to="/">Voltar para home</Link>
    </div>
  );
}
