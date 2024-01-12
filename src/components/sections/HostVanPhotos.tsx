import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { hostVan } = useOutletContext();

  return (
    <section className="py-12">
      <figure className="w-28 overflow-hidden rounded-md">
        <img src={hostVan.imageUrl} alt={hostVan.name} />
      </figure>
    </section>
  );
};

export default HostVanPhotos;
