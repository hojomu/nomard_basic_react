import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=31b7b983147a4ed21fe538ba07011d1e&targetDt=20230318`
      )
    ).json();
    setMovies(json.data.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              title={movie.movieNm}
              openDt={movie.openDt}
              rank={movie.rank}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;