import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ backgroundColor: '#141414', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#E50914', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>Netflix Clone</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ color: 'white', backgroundColor: '#222', borderRadius: '8px', padding: '15px' }}>
            <img 
              src={movie.thumbnail} 
              alt={movie.title} 
              style={{ width: '100%', borderRadius: '8px' }} 
            />
            <h2>{movie.title}</h2>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <button
              onClick={() => window.open(movie.netflixUrl, '_blank')}
              style={{
                backgroundColor: '#E50914',
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px',
                fontWeight: 'bold'
              }}
            >
              Watch Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
