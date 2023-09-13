import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Login } from '../components/Login';
import useLocalstorage from '../hooks/useLocalstorage';
import { addItem, updateItem, deleteItem } from '../services/firebase';

export function LoggedPage() {
  const go = useNavigate();
  const [userId, setUserId] = useLocalstorage('userId', '');

  async function handleAdd() {
    try {
      await addItem('movies', 'movie-3', { name: 'Apple' })
        .then(console.log)
        .catch(console.error);
      console.info('Added');
    } catch (err) {
      console.error(err);
    }
  }

  async function handleUpdate() {
    try {
      await updateItem('movies', 'movie-3', { model: 'iPhone 15' })
        .then(console.log)
        .catch(console.error);
      console.info('Updated');
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete() {
    try {
      await deleteItem('movies', 'movie-3')
        .then(console.log)
        .catch(console.error);
      console.info('Deleted');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="box-login">
      <h1
        onClick={() => {
          go('/login');
        }}
      >
        Bem-vindo!
      </h1>
      <small>{userId}</small>
      <button onClick={handleAdd}>Adicionar</button>
      <button onClick={handleUpdate}>Atualizar</button>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
}
