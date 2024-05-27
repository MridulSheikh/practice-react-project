/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const toastId = useRef(null);
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    toastId.current = toast.loading("please wait");
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss(toastId.current);
        toast.success("Successfully Delete Item!");
        console.log(data);
        onDelete(id);
      });
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h2 className="card-title text-3xl">{title}</h2>

        <h3 className="text-xl font-semibold">${price}</h3>
        <p>{description}</p>
        <div className=" space-y-2">
          <button className="btn bg-indigo-500 text-white w-full">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 text-white w-full">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          <button
            onClick={handleDelete}
            className="btn bg-red-500 text-white w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
