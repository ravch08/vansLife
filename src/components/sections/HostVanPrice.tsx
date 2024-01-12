import { useOutletContext } from "react-router-dom";

const HostVanPrice = () => {
  const { hostVan } = useOutletContext();

  return (
    <section className="py-12">
      <h3 className="text-2xl">
        $<span className="font-semibold text-orange-500">{hostVan.price}</span>{" "}
        /day
      </h3>
    </section>
  );
};

export default HostVanPrice;
