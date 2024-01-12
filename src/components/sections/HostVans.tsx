import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../utils/utility";

export const loader = () => getVans();

const HostVans = () => {
  const hostVans = useLoaderData();

  return (
    <section className="py-12">
      <h2 className="font-h2">Your listed Vans</h2>
      <div className="flex flex-wrap items-start justify-between gap-4">
        {hostVans ? (
          hostVans.map((van) => (
            <Link
              to={`${van.id}`}
              key={van.id}
              className="w-[30%] rounded-md bg-white px-4 py-4"
            >
              <div className="flex items-center gap-4">
                <figure className="w-16">
                  <img src={van.imageUrl} alt={van.name} />
                </figure>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium">{van.name}</h3>
                  <p>${van.price}/day</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default HostVans;
