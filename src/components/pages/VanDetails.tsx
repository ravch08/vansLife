import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const VanDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  // console.log(location);

  const [van, setVan] = useState(null);

  useEffect(() => {
    async function getVan() {
      const res = await fetch(`/api/vans/${id}`);
      const data = await res.json();
      setVan(data.vans);
    }
    getVan();
  }, []);

  const locationLink = location.state?.filter || "";
  const filterItem = location.state?.type;

  // const filterItem = location.state?.filter.split("=").at(-1);

  return (
    <main className="bg-white">
      <Link
        to={`..${locationLink}`}
        relative="path"
        className="flex items-center gap-2 px-8 pt-8 text-xs underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        Back to {!filterItem ? "all" : filterItem} vans
      </Link>

      <section className="px-8 py-12">
        <figure>
          <img src={van?.imageUrl} alt={van?.name} />
        </figure>

        <span className="mt-8 inline-block rounded-sm bg-orange-300 px-6 py-2 text-xs font-semibold uppercase tracking-wider">
          {van?.type}
        </span>
        <h2 className="py-6 text-4xl font-semibold">{van?.name}</h2>
        <p className="mb-8">
          <strong>${van?.price}</strong> /day
        </p>
        <p>{van?.description}</p>

        <Link
          to="#!"
          className="mt-8 block bg-orange-600 py-2 text-center text-white transition-colors duration-500 ease-in-out hover:bg-orange-200"
        >
          Rent this van
        </Link>
      </section>
    </main>
  );
};

export default VanDetails;
