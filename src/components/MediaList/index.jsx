import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MediaList = () => {
  const [mediaList, setMediaList] = useState([]);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjczYzE3YmVjOTBmMWU1Y2IzOWY4YWFlZjk3YWIzYSIsIm5iZiI6MTcyMzM2NzQ5NS4xNzg1MjcsInN1YiI6IjY2Yjg3ZTIxZTcyZjYwNDgxY2FhYjczOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kT63WUOpUR1z755ko5asofpqVG3SlWZmg3MqaQ0b7jM",
      },
    }).then(async (res) => {
      const data = await res.json();
      console.log({ data });
      const trendingMediaList = data.results.slice(0, 12);
      setMediaList(trendingMediaList);
    });
  }, []);
  console.log(mediaList);
  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">Trending</p>
        <ul className="flex rounded border border-white">
          <li className="cursor-pointer rounded bg-white px-2 py-1 text-black">
            All
          </li>
          <li className="cursor-pointer rounded px-2 py-1">Movie</li>
          <li className="cursor-pointer rounded px-2 py-1">TV Show</li>
        </ul>
      </div>

      <div className="lg:gird-cols-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            title={media.title || media.name}
            releaseDate={media.release_date || media.first_air_date}
            poster={media.poster_path}
            point={media.vote_average}
            mediaType={media.media_type}
          />
        ))}
      </div>
    </div>
  );
};
export default MediaList;
