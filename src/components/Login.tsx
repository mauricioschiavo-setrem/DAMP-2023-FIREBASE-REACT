import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalstorage from '../hooks/useLocalstorage';

import { signIn } from '../services/firebase';

export function Login() {
  const go = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [userId, setUserId] = useLocalstorage('userId', '');

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    signIn(usuario, senha)
      .then((credential) => {
        alert('Bem-vindo! ' + credential.user.uid);
        setUserId(credential.user.uid);
        go('/logado');
      })
      .catch((error) => {
        console.log(error);
        alert('Usuário ou senha incorretos!');
      });
  }

  return (
    <>
      <Link to="/logado">{userId}</Link>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário:</label>
          <input onChange={(e) => setUsuario(e.target.value)} value={usuario} />
        </div>
        <div>
          <label>Senha:</label>
          <input
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            type="password"
          />
        </div>
        <div>
          <button type="submit">Acessar</button>
        </div>
        <div>
          Ainda não tem conta?
          <Link to="/criar-conta">
            <button>Que tal criar uma!</button>
          </Link>
        </div>
      </form>
    </>
  );
}
