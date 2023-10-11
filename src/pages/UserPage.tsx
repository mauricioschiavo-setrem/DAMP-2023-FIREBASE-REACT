import { useEffect, useState } from 'react';
import { Filme } from '../components/Filme/Filme';
import { selectAllItems } from '../services/firebase';
import { getDiscoverMovies } from '../services/moviedb';

export function UserPage() {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  async function handleLoadMovies() {
    try {
      const data = await getDiscoverMovies();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleLoadFavoriteMovies() {
    try {
      const queryResult = await selectAllItems('movies');
      setFavoriteMovies(queryResult);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    handleLoadMovies();
    handleLoadFavoriteMovies();
  }, []);

  return (
    <>
      <h1>Bem-vindo!</h1>
      <hr />
      <h2>Seus favoritos</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
        }}
      >
        {favoriteMovies?.map((movie) => {
          return <Filme filme={movie} />;
        })}
      </div>
      <hr />
      <h2>Veja outros lançamentos</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
        }}
      >
        {movies?.map((movie) => {
          return <Filme filme={movie} />;
        })}
      </div>
    </>
  );
}
