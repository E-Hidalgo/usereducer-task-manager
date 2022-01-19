import React from "react";

export const Heading = () => {
  return (
    <div>
      <div className="flex item-center mb-10">
        <h5 className="text-gray-100 font-bold text-2x1">Task App</h5>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
};
