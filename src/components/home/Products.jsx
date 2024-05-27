/* eslint-disable no-undef */
import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div>
      <h1 className="mt-8 text-4xl font-bold text-center">Our Products</h1>
      <p className=" text-center mt-1 text-gray-500 lg:w-2/6 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        perferendis earum nulla dolorem.
      </p>
      <div className="grid lg:grid-cols-3 gap-7 px-6 justify-center items-center mt-10">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 3).map((shoe) => (
            <SingleProduct key={shoe.id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
