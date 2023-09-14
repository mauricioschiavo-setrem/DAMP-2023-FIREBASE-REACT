import { useEffect, useState } from 'react';
import { Filme } from '../components/Filme/Filme';
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
