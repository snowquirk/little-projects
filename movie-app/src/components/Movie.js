const IMG_API = 'http://image.tmdb.org/t/p/w1280';

const Movie = ({ title, overview, poster_path, vote_average }) => (
  <div className='movie'>
    <img src={`${IMG_API}${poster_path}`} alt={title}></img>
    <div className='movie-info'>
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>

    <div className='movie-overview'>
      <h2>Overview: </h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
