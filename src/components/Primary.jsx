import React from "react";

const Primary = () => {
  return (
    <div>
      <h1 className="text-center m-8">Primary Focus</h1>
      <div className="flex flex-wrap justify-center">
        <div className=" rounded-xl w-2/5 m-3 gap-3 p-3 box-border bg-indigo-100 text-black">
          <p className="text-2xl mb-3 font-bold">Web Design and Development</p>
          <p>
            Creating attractive, easy-to-use websites that work well for
            businesses and individuals online.
          </p>
        </div>
        <div className=" rounded-xl m-3 w-2/5 gap-3 p-3 bg-indigo-100 text-black">
          <p className="text-2xl mb-3 font-bold">Mobile Apps & Games</p>
          <p>
            Creating and developing engaging mobile apps and games for iOS and
            Android devices.
          </p>
        </div>
        <div className=" rounded-xl m-3 w-2/5 gap-3 p-3 bg-indigo-100 text-black">
          <p className="text-2xl mb-3 font-bold">Development Solutions</p>
          <p>
            Utilizing JavaScript frameworks like React, Node, Next, Vue and more
            to build interactive web applications.
          </p>
        </div>
        <div className=" rounded-xl m-3 w-2/5 gap-3 p-3 bg-indigo-100 text-black">
          <p className="text-2xl mb-3 font-bold">Marketing & SEO</p>
          <p>
            Using SEO and marketing strategies to boost online visibility and
            promote products or services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Primary;
