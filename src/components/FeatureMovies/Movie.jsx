import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = () => {
  return (
    <div>
      <img
        src="https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg"
        className="aspect-video brightness-50"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">Inside Out 2</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">2024-06-11</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>
              Teenager Riley&apos;s mind headquarters is undergoing a sudden
              demolition to make room for something entirely unexpected: new
              Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been
              running a successful operation by all accounts, aren’t sure how to
              feel when Anxiety shows up. And it looks like she’s not alone.
            </p>
          </div>
          <div className="mt-4">
            <button className="mr-2 rounded bg-white px-4 py-2 text-10 text-black lg:text-lg">
              <FontAwesomeIcon icon={faPlay} /> Trailer
            </button>
            <button className="rounded bg-slate-300/35 px-4 py-2 text-10 lg:text-lg">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movie;
