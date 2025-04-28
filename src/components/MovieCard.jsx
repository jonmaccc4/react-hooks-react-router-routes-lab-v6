import {Link} from 'react-router-dom';
import Movie from '../pages/Movie';

function MovieCard({movie}) {
  
  return (
    <article>
        <h2>{Movie.title}</h2>
        <Link to={`/movie/${movie.id}`}>View Details</Link>
    </article>
  );
};

export default MovieCard;