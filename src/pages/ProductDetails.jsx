import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className=" flex flex-wrap lg:flex-nowrap gap-x-10 max-w-screen-xl mx-auto px-5 mt-10">
      <div className=" relative h-[600px]">
        <img className=" h-full" src={image_url} alt="product image" />
      </div>
      <div>
        <h1 className="text-5xl font-bold">{title}</h1>

        <h3 className="text-2xl mt-5 font-bold">$ {price}</h3>
        <h3 className="text-xl font-semibold mt-5">{brand}</h3>
        <p className="text-lg font-normal text-gray-500 mt-5">{description}</p>
        <div className="mt-10">
          <button className="btn bg-[#d0021b] text-md px-14 uppercase py-3 rounded-full font-semibold text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
