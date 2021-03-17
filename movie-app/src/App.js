import { useEffect, useState } from 'react';
import axios from 'axios';
import { discoverMovie } from './api/discoverMovie';

import Movie from './components/Movie';
import Search from './components/Search';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMoviesByPopularity = async () => {
    const sortBy = 'popularity.desc';
    const { data } = await discoverMovie(sortBy);

    console.log(data.results);
    setMovies(data.results);
    setLoading(false);
  };

  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=2edf8535f39aa32c39c5502c24ea7925&query=';

  const searchMovies = async (searchTerm) => {
    const { data } = await axios.get(`${SEARCH_API}${searchTerm}`);
    console.log(data.results);
    setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMoviesByPopularity();
  }, []);

  return (
    <div>
      <Search onFormSubmit={searchMovies} />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className='movie-container'>
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
