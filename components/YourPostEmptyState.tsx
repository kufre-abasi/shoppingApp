import React from "react";

const YourPostEmptyState = () => {
  return (
    <div
      className="md:h-[313px] w-full rounded-md h-[270px]  relative overflow-hidden bg-cover bg-no-repeat bg-center hover:bg-gray-200"
      style={{ backgroundImage: `url(${"/images/chocho.png"})` }}
    >
      <div className="absolute -bottom-7 py-2 md:py-4 px-1 backdrop-blur-xl bg-opacity-75 bg-black left-0 right-0 my-6 border-b border-gray-300">
        <div className="flex  md:justify-center md:max-w-[300px] md:mx-auto items-center flex-col">
          <div className="font-semibold max-w-[230px] md:max-w-[300px]  text-center font-general_Sans text-sm md:text-[18px] text-white mb-2">
            You haven’t made any hive post. Start by making a post
          </div>
          <p className="font-medium text-white text-xs">
            This is help your community engagement
          </p>
        </div>
      </div>
      <div className="mx-6 my-4 flex">
        {/* Additional content can go here */}
      </div>
    </div>
  );
};

export default YourPostEmptyState;
