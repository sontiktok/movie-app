import CircularProgressBar from "./CircularProgressBar";

const MovieCard = () => {
  return (
    <div className="border-stale-800 rounded-lg border">
      <img
        className="rounded-lg"
        src="https://image.tmdb.org/t/p/original/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg"
      />
      <div className="relative -top-[1.5vw] px-4">
        <CircularProgressBar />
        <p className="mt-2 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          aspernatur.
        </p>
        <p className="text-slate-300">12/08/2024</p>
      </div>
    </div>
  );
};

export default MovieCard;
