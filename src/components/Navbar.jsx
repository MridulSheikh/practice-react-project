import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../assets/images/nike_logo.png";

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="bg-white sticky top-0 z-40">
      <div className="navbar max-w-screen-xl mx-auto px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              {!user && (
                <>
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li>
                    <Link to={"/register"}>Register</Link>
                  </li>
                </>
              )}
              {user && (
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
              )}
              {user && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn bg-red-500 text-white"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div className=" relative h-20 hidden lg:inline-block ">
            <img src={logo} className="h-full" />
          </div>
        </div>
        <div className="navbar-end space-x-5">
          <ul className="items-center gap-x-5 font-semibold text-base hidden lg:flex">
            <li className="hover:bg-red-700 hover:text-white py-2 px-3 rounded-full">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:bg-red-700 hover:text-white py-2 px-3 rounded-full">
              <Link to={"/about"}>About</Link>
            </li>
            {!user && (
              <>
                <li className="hover:bg-red-700 hover:text-white py-2 px-3 rounded-full">
                  <Link to={"/login"}>Login</Link>
                </li>
                <li className="hover:bg-red-700 hover:text-white py-2 px-3 rounded-full">
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {user && (
              <li className="hover:bg-red-700 hover:text-white py-2 px-3 rounded-full">
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
          <div className="avatar">
            <div className="w-12 rounded-full border-2 border-black">
              <img src={user?.photoURL || "/public/placeholder.jpg"} />
            </div>
          </div>
          {user && (
            <button
              onClick={handleLogout}
              className="btn bg-red-500 text-white hidden lg:block"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
