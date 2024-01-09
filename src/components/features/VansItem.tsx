import { Link } from "react-router-dom";

const VansItem = ({ id, imgSrc, title, category, price }) => {
  return (
    <Link to={id} className="mb-8 w-[45%] rounded-sm bg-orange-100">
      <figure>
        <img src={imgSrc} alt={title} className="rounded-sm" />
      </figure>
      <span className="block px-4 py-2 font-medium uppercase tracking-wide text-orange-600">
        {category}
      </span>
      <div className="flex items-center justify-between px-4 pb-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span>
          $<strong>{price}</strong> /day
        </span>
      </div>
    </Link>
  );
};

export default VansItem;
