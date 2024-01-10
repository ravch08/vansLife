// import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { VanItem, bannerVans } from "../utils/helper";
// import { getVans } from "../utils/utility";

const Vans = () => {
  // const { data, status } = useQuery({
  //   queryKey: ["vans"],
  //   queryFn: getVans,
  // });

  const [params, setParams] = useSearchParams();
  const vans = useLoaderData();

  const typeFilter = params.get("type");

  const filteredVans = typeFilter
    ? vans?.filter((item) => item.type === typeFilter)
    : vans;

  return (
    <main>
      <section>
        <figure className="h-[300px] overflow-hidden ">
          <img src={bannerVans} alt="vans banner" />
        </figure>
      </section>

      <section className="bg-white px-8 py-12">
        <h2 className="font-h2 mb-8">Explore our van options</h2>

        <div className="mb-16 flex items-center gap-4">
          <button
            onClick={() => setParams({ type: "simple" })}
            className={
              typeFilter === "simple"
                ? "btn-category bg-orange-800"
                : "btn-category bg-orange-300"
            }
          >
            Simple
          </button>
          <button
            onClick={() => setParams({ type: "rugged" })}
            className={
              typeFilter === "rugged"
                ? "btn-category bg-orange-800"
                : "btn-category bg-orange-300"
            }
          >
            Rugged
          </button>
          <button
            onClick={() => setParams({ type: "luxury" })}
            className={
              typeFilter === "luxury"
                ? "btn-category bg-orange-800"
                : "btn-category bg-orange-300"
            }
          >
            Luxury
          </button>
          <button onClick={() => setParams({})} className="ml-2 underline">
            Clear filters
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6">
          {filteredVans?.map((van) => {
            return (
              <VanItem
                id={van.id}
                key={van.id}
                title={van.name}
                price={van.price}
                category={van.type}
                imgSrc={van.imageUrl}
                typeFilter={typeFilter}
                searchParams={params}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Vans;
