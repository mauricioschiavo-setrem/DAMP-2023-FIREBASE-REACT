import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Login } from '../components/Login';
import useLocalstorage from '../hooks/useLocalstorage';
import {
  addItem,
  updateItem,
  deleteItem,
  selectAllItems,
  filter,
} from '../services/firebase';
import { getDiscoverMovies } from '../services/moviedb';

export function LoggedPage() {
  const go = useNavigate();
  const [userId, setUserId] = useLocalstorage('userId', '');

  async function handleAdd(id: string, data: unknown) {
    try {
      await addItem('movies', id, data).then(console.log).catch(console.error);
      console.info('Added');
      loadAllItems();
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
      loadAllItems();
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
      loadAllItems();
    } catch (err) {
      console.error(err);
    }
  }

  const [list, setList] = useState([]);
  async function loadAllItems() {
    try {
      const filter = {
        field: 'name',
        operation: '==',
        value: 'Start Wars',
      } as filter;
      const queryResult = await selectAllItems('movies', [filter]);
      console.log(queryResult);
      setList(queryResult);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadAllItems();
    handleLoadMovies();
  }, []);

  const [movies, setMovies] = useState([]);
  async function handleLoadMovies() {
    const data = await getDiscoverMovies();
    console.log(data);
    setMovies(data.results);
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
      <button onClick={() => handleAdd('movie-3', 'Apple')}>Adicionar</button>
      <button onClick={handleUpdate}>Atualizar</button>
      <button onClick={handleDelete}>Deletar</button>
      <button onClick={loadAllItems}>loadAllItems</button>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>;
        })}
      </ul>
      <hr />
      <button onClick={handleLoadMovies}>Movies</button>
      <div>
        {movies.map((item) => {
          return (
            <div onClick={() => handleAdd(String(item.id), item)} key={item.id}>
              <img
                src={'https://image.tmdb.org/t/p/w154/' + item.poster_path}
              />
              {item.id} {item.original_title} ({item.release_date})
            </div>
          );
        })}
      </div>
    </div>
  );
}
