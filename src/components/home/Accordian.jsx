const Accordian = () => {
  const fakeArray = [
    {
      q: "Click to open this one and close others",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt vitae totam! Nobis, incidunt unde! Sunt, quod culpa est facere placeat magni voluptatum minima natus error odio, nostrum voluptatem! Tempore!",
    },
    {
      q: "Click to open this one and close others",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt vitae totam! Nobis, incidunt unde! Sunt, quod culpa est facere placeat magni voluptatum minima natus error odio, nostrum voluptatem! Tempore!",
    },
    {
      q: "Click to open this one and close others",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt vitae totam! Nobis, incidunt unde! Sunt, quod culpa est facere placeat magni voluptatum minima natus error odio, nostrum voluptatem! Tempore!",
    },
    {
      q: "Click to open this one and close others",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt vitae totam! Nobis, incidunt unde! Sunt, quod culpa est facere placeat magni voluptatum minima natus error odio, nostrum voluptatem! Tempore!",
    },
    {
      q: "Click to open this one and close others",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt vitae totam! Nobis, incidunt unde! Sunt, quod culpa est facere placeat magni voluptatum minima natus error odio, nostrum voluptatem! Tempore!",
    },
    {
      q: "Click to open this one and close others",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt vitae totam! Nobis, incidunt unde! Sunt, quod culpa est facere placeat magni voluptatum minima natus error odio, nostrum voluptatem! Tempore!",
    },
  ];
  return (
    <div className=" max-w-screen-xl mx-auto px-5 mt-32">
      <div className=" grid lg:grid-cols-2 gap-3 mt-10">
        <div className="">
          <h1 className="mt-8 text-4xl font-bold text-left">
            {" "}
            Frequently Asked Questions!
          </h1>
          <p className=" text-left mt-1 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            perferendis earum nulla dolorem.
          </p>
          <div className="relative h-6/7">
            <img
              src="https://i.pinimg.com/474x/1e/26/b6/1e26b62690c705fd914fc9116f70cfec.jpg"
              className="h-full"
              alt=""
            />
          </div>
        </div>
        <div className=" flex flex-col gap-y-5">
          {fakeArray.map((value, index) => (
            <div key={index} className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                <h1 className=" font-bold">{value.q} ?</h1>
              </div>
              <div className="collapse-content">
                <p>{value.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
