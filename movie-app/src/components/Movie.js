import PropTypes from "prop-types";

function Movie({ title, openDt, rank }) {
  return (
    <div>
      <h2>{rank}위 : {title}</h2>
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