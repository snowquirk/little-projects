import { getMovies } from './MovieApi';

export const discoverMovie = (sort_by) => {
  return getMovies('/discover/movie', { sort_by });
};
