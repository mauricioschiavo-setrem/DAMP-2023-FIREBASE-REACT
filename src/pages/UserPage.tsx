import { useEffect, useState } from 'react';
import { getDiscoverMovies } from '../services/moviedb';

export function UserPage() {
  const [movies, setMovies] = useState([]);

  async function handleLoadMovies() {
    try {
      const data = await getDiscoverMovies();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    handleLoadMovies();
  }, []);

  return (
    <>
      <h1>Bem-vindo!</h1>
      <hr />
      <h2>Seus favoritos</h2>
      <hr />
      <h2>Veja outros lançamentos</h2>
      {movies?.map((movie) => {
        return <div>{movie.original_title}</div>;
      })}
    </>
  );
}
