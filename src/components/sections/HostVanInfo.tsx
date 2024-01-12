import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { hostVan } = useOutletContext();
  console.log(hostVan);

  return (
    <section className="flex flex-col gap-2 py-6">
      <p>
        <strong>Name:</strong> {hostVan.name}
      </p>
      <p>
        <strong>Catefory:</strong> {hostVan.type}
      </p>
      <p>
        <strong>Price:</strong> ${hostVan.price} /day
      </p>
      <p>
        <strong>Description:</strong> {hostVan.description}
      </p>
    </section>
  );
};

export default HostVanInfo;
