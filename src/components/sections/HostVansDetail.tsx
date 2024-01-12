import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getVanDetail } from "../utils/utility";

export const loader = ({ params }) => getVanDetail(params.id);

const HostVansDetail = () => {
  const hostVan = useLoaderData();

  return (
    <section className="py-12">
      <Link
        to=".."
        relative="path"
        className="mb-6 flex items-center gap-2 text-xs underline"
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
        Back to all vans
      </Link>
      <div className="w-full rounded-md bg-white p-8">
        <div className="flex items-start gap-8">
          <figure className="w-[40%]">
            <img src={hostVan.imageUrl} alt={hostVan.name} />
          </figure>
          <div className="flex w-[50%] flex-col py-2">
            <h3 className="text-3xl font-medium">{hostVan.name}</h3>
            <p className="my-4">
              $<strong>{hostVan.price}</strong>/day
            </p>

            <nav
              className="mb-2 mt-4 flex items-center gap-4"
              aria-labelledby="Host Van Navigation"
            >
              <NavLink to="" className="host-navlink" end>
                Info
              </NavLink>
              <NavLink to="price" className="host-navlink">
                Price
              </NavLink>
              <NavLink to="photos" className="host-navlink">
                Photos
              </NavLink>
            </nav>
            <hr />
            <Outlet context={{ hostVan }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostVansDetail;
