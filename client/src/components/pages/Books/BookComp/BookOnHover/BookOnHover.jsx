import React from "react";

// Assets
import { RiEditBoxLine } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";

const BookOnHover = () => {
  return (
    <div className="absolute inset-0 hidden group-hover:block bg-black rounded-2xl transition-all duration-300 opacity-90">
      <div className="absolute z-50 flex items-center justify-center flex-col w-full p-4  mb-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button className="font-bold text-2xl capitalize text-custom-3 hover:bg-gradient-to-r from-[#01C29A] to-[#E9CD70] hover:text-white  cursor-pointer border-2 border-custom-3 w-full mb-4 flex items-center justify-center py-2 ">
          <RiEditBoxLine className="mr-2" />
          Update
        </button>
        <button className="font-bold text-2xl capitalize text-red-500 cursor-pointer border-2 border-red-500  flex items-center py-2 w-full justify-center hover:bg-red-400 hover:text-white hover:border-red-400">
          <MdOutlineDelete className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookOnHover;
