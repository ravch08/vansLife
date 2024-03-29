import { Link } from "react-router-dom";
import { bannerAbout } from "../utils/helper";

const About = () => {
  return (
    <main>
      <section className="container mx-auto">
        <figure className="overflow-hidden">
          <img src={bannerAbout} alt="about banner" className="w-full" />
        </figure>
      </section>

      <section>
        <div className="container mx-auto bg-white p-12 ">
          <h2 className="text-4xl font-semibold">
            Don't squeeze in a sedan when you could relax in a van.
          </h2>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            maiores totam quam quisquam accusantium modi laborum id animi
            aliquam omnis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            dolorem, id cupiditate aliquam rem sint similique alias dolores
            animi ab, cumque voluptatibus nobis placeat veniam.
          </p>
          <div className="mt-8 inline-block w-[40%] rounded-md bg-orange-200 px-12 py-6">
            <h3 className="font-semibold">Your destination is waiting!</h3>
            <h4 className="font-semibold">Your van is ready!</h4>

            <Link
              to="/vans"
              className="mt-6 inline-block rounded-md bg-black px-6 py-3 text-sm text-white transition-colors duration-500 hover:bg-orange-800"
            >
              Explore our vans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
