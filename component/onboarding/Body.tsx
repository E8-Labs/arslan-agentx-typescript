import React from "react";

type BodyProps = {
  children: React.ReactNode;
};

const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center px-4">
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 flex flex-col bg-white sm:rounded-xl rounded-none h-full py-6 sm:py-10 px-6 sm:px-10">
        {children}
      </div>
    </div>
  );
};

export default Body;
