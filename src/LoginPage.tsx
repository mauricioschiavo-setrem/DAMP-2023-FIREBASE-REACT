import { Link } from 'react-router-dom';
import { Login } from './components/Login';

export function LoginPage() {
  return (
    <>
      <h1>Login</h1>
      <Link to="/">Voltar para home</Link>
      <Login />
    </>
  );
}
