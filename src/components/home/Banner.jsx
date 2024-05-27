import shoesImage from "../../assets/images/nike_shoes.png";

const Banner = () => {
  return (
    <div className="h-[600px] grid lg:grid-cols-2 max-w-screen-xl mx-auto px-5">
      <div className=" flex flex-col justify-center animate-fade-right animate-once animate-duration-[2000ms] animate-delay-100">
        <h1 className=" font-normal text-[#232323] text-2xl lg:text-7xl">
          Nike Shoes
        </h1>
        <h1 className=" font-extrabold text-[#232323] text-2xl lg:text-7xl">
          Just Do it.
        </h1>
        <p className=" mt-5 text-gray-500">
          take on anything spring thows your way in these functional styles
        </p>
        <div className="mt-10">
          <button className=" bg-[#d0021b] text-md px-14 uppercase py-3 rounded-full font-semibold text-white">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" relative animate-fade-left animate-once animate-duration-[2000ms] animate-delay-100">
        <img src={shoesImage} className=" absolute h-full mx-auto" alt="" />
      </div>
    </div>
  );
};

export default Banner;
