import { Link } from "react-router-dom";
import { bannerHome } from "../utils/helper";

const Home = () => {
  return (
    <main>
      <section>
        <div className="container mx-auto">
          <div className="relative overflow-hidden">
            <img src={bannerHome} className="w-auto" alt="banner" />
            <div className="absolute bottom-1/4 w-1/2 px-16 text-left">
              <h1 className="text-5xl font-bold text-white">
                You got the travel plans, we got the travel vans.
              </h1>
              <p className="py-8 text-sm text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                culpa ducimus aliquam perferendis doloremque vel numquam ratione
                itaque voluptatum sapiente!
              </p>
              <Link
                to="vans"
                className="mt-8 inline-block rounded-sm bg-orange-500 px-8 py-3 text-center text-white"
              >
                Find your Van
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
