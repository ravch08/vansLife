import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VanItem, bannerVans } from "../utils/helper";

const Vans = () => {
  const [vans, setVans] = useState(null);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    async function getVans() {
      const response = await fetch("/api/vans");
      const data = await response.json();
      setVans(data.vans);
    }
    getVans();
  }, []);

  const typeFiter = params.get("type");

  const filteredVans = typeFiter
    ? vans?.filter((item) => item.type === typeFiter)
    : vans;

  return (
    <main>
      <section>
        <figure className="h-[300px] overflow-hidden ">
          <img src={bannerVans} alt="vans banner" />
        </figure>
      </section>

      <section className="bg-white px-8 py-12">
        <h2 className="mb-8 text-4xl font-semibold">Explore our van options</h2>

        <div className="mb-16 flex items-center gap-4">
          <button
            onClick={() => setParams({ type: "simple" })}
            className={
              typeFiter === "simple"
                ? "btn-category bg-orange-800"
                : "btn-category bg-orange-300"
            }
          >
            Simple
          </button>
          <button
            onClick={() => setParams({ type: "rugged" })}
            className={
              typeFiter === "rugged"
                ? "btn-category bg-orange-800"
                : "btn-category bg-orange-300"
            }
          >
            Rugged
          </button>
          <button
            onClick={() => setParams({ type: "luxury" })}
            className={
              typeFiter === "luxury"
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
                key={van.id}
                id={van.id}
                title={van.name}
                category={van.type}
                price={van.price}
                imgSrc={van.imageUrl}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Vans;
