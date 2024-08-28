import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/CircularProgressBar";
const MovieDetail = () => {
  return (
    <div className="relative overflow-hidden text-white">
      <img
        src="https://image.tmdb.org/t/p/original//hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg"
        className="absolute inset-0 brightness-[.2]"
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <img src="https://media.themoviedb.org/t/p/w600_and_h900_bestv2//ojDg0PGvs6R9xYFodRct2kdI6wC.jpg" />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">Test</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">G</span>
            <p>2024/25/12</p>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar percent={90} size={3.5} strokeWidth={0.3} />
              Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Trailler
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              odio quibusdam quidem, rerum perferendis tempora! Ad nam ipsum
              magni nihil iure, earum deleniti itaque voluptate. Libero
              reprehenderit id quidem nam?
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div>
              <p className="font-bold">Director</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <p className="font-bold">Writer</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
