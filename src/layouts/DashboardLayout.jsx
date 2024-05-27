import { Link, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-[#1c2434] text-white min-h-screen py-10">
        <ul>
          <li className=" p-4 text w-full  hover:bg-slate-700">
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li className=" p-4 text w-full  hover:bg-slate-700">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className=" p-4 text w-full  hover:bg-slate-700">
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li className=" p-4 text w-full hover:bg-slate-700">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
