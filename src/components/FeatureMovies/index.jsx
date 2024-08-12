import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";
const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjczYzE3YmVjOTBmMWU1Y2IzOWY4YWFlZjk3YWIzYSIsIm5iZiI6MTcyMzM2NzQ5NS4xNzg1MjcsInN1YiI6IjY2Yjg3ZTIxZTcyZjYwNDgxY2FhYjczOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kT63WUOpUR1z755ko5asofpqVG3SlWZmg3MqaQ0b7jM",
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id);
    });
  }, []);

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};
export default FeatureMovies;
