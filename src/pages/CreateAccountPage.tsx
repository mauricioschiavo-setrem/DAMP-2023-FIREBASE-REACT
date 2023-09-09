import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreateAccount } from '../components/CreateAccount';

export function CreateAccountPage() {
  return (
    <div className="box-login">
      <h1>Criar conta</h1>
      <CreateAccount />
      <Link to="/">Voltar para home</Link>
    </div>
  );
}
