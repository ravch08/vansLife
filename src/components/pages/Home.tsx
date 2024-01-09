import { Link } from "react-router-dom";
import { banner } from "../utils/helper";

const Home = () => {
  return (
    <main>
      <div className="container">
        <div className="relative">
          <figure>
            <img src={banner} alt="banner" />
          </figure>
          <div className="absolute bottom-1/4 px-16">
            <h1 className="text-3xl font-bold text-white">
              You got the travel plans, we got the travel vans.
            </h1>
            <p className="py-4 text-sm text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id culpa
              ducimus aliquam perferendis doloremque vel numquam ratione itaque
              voluptatum sapiente!
            </p>
            <Link
              to="vans"
              className="mt-8 block bg-orange-500 py-2 text-center text-white"
            >
              Find your Van
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
