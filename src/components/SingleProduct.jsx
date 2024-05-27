import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="h-96">
        <img src={image_url} alt="Shoes" className="h-full" />
      </figure>
      <div className="card-body">
        <h3 className="font-semibold">{brand}</h3>
        <h2 className="card-title text-4xl font-bold mt-3">{title}</h2>
        <h3 className="text-2xl font-bold my-1">${price}</h3>
        <p className=" text-gray-500">{description.substring(0, 50)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`} className="w-full">
            <button className="btn bg-[#d0021b] text-white mt-5 w-full">
              See details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
