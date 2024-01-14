// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { queryClient } from "../../App";
import { VanItem, bannerVans } from "../utils/helper";
import { getVans } from "../utils/utility";

export const loader = () => {
  return queryClient.fetchQuery({
    queryKey: ["vans"],
    queryFn: getVans,
  });
};

const Vans = () => {
  const [params, setParams] = useSearchParams();

  const { data, status } = useQuery({
    queryKey: ["vans"],
    queryFn: getVans,
  });

  const typeFilter = params.get("type");
  const filteredVans = typeFilter
    ? data?.filter((item) => item.type === typeFilter)
    : data;

  return (
    <main>
      <section className="container mx-auto">
        <figure className="overflow-hidden">
          <img src={bannerVans} alt="about banner" className="w-full" />
        </figure>
      </section>

      <section>
        <div className="container mx-auto bg-white px-40 py-12">
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

          <div className="flex flex-wrap items-center gap-6">
            {status === "pending" ? <h2>Loading...</h2> : null}
            {status === "success"
              ? filteredVans?.map((van) => {
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
                })
              : null}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Vans;
