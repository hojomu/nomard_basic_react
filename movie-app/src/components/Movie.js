import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({ title, openDt, rank }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${rank}`}>{rank}위 : {title}</Link>
      </h2>
      <p>{openDt}</p>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  openDt: PropTypes.string.isRequired,
  rank: PropTypes.instanceOf.isRequired,
};

export default Movie;