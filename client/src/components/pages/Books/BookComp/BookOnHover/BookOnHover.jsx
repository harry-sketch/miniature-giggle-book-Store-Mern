import React from "react";

// Assets
import { MdOutlineDelete } from "react-icons/md";

const BookOnHover = ({ handleDelete }) => {
  return (
    <div className="absolute inset-0 hidden group-hover:block bg-black rounded-2xl transition-all duration-300 opacity-90">
      <div className="absolute z-50 flex items-center justify-center flex-col w-full p-4  mb-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          className="font-bold text-2xl capitalize text-red-500 cursor-pointer border-2 border-red-500  flex items-center py-2 w-full justify-center hover:bg-red-400 hover:text-white hover:border-red-400"
          onClick={handleDelete}
        >
          <MdOutlineDelete className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default React.memo(BookOnHover);
