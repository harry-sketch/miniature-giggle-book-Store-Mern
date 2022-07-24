import React from "react";

import BookOnHover from "./BookOnHover/BookOnHover";

const BookComp = ({ title, src, price, desc }) => {
  return (
    <div className="text-white md:w-[19rem] md:min-h-fit border-2 border-custom-3 rounded-2xl p-2 group relative ">
      <BookOnHover />
      <div className="rounded-2xl">
        <img
          src={src}
          alt={title}
          className="object-cover min-h-full w-full  rounded-tl-2xl rounded-tr-2xl"
        />
      </div>
      <div className="flex items-center justify-between my-2">
        <div className="font-semibold text-xl capitalize">{title}</div>
        <div className="font-semibold text-xl capitalize">${price}</div>
      </div>

      <div className="text-sm mb-2 truncate">{desc}</div>
    </div>
  );
};

export default React.memo(BookComp);
