import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const toastId = useRef(null);

  const handleDelete = async (id) => {
    toastId.current = toast.loading("please wait");
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss(toastId.current);
        toast.success("Successfully Delete Item!");
        console.log(data);
        setProducts(products.filter((product) => product.id !== id));
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/shoes/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <ToastContainer />
      <h1 className="text-lg border-b pb-2">All Products</h1>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((shoe) => (
              <tr key={shoe.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={shoe.image_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{shoe.title}</div>
                      <div className="text-sm opacity-50">{shoe.brand}</div>
                    </div>
                  </div>
                </td>
                <td>{shoe.description?.substring(0, 30)}...</td>
                <td>$ {shoe.price}</td>
                <td className=" space-x-3 flex">
                  <button className="btn btn-sm bg-indigo-500 text-white">
                    <Link
                      to={`/products/${shoe.id}`}
                      className=" flex items-center justify-center gap-x-2"
                    >
                      <FaEye /> See Deatils
                    </Link>
                  </button>
                  <button className="btn btn-sm bg-green-600 text-white">
                    <Link
                      to={`edit/${shoe.id}`}
                      className=" flex items-center justify-center gap-x-2"
                    >
                      <FaPen /> Edit
                    </Link>
                  </button>
                  <button
                    onClick={() => handleDelete(shoe.id)}
                    className="btn btn-sm bg-red-500 text-white flex items-center justify-center gap-x-2"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
