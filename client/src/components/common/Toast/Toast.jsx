import React from "react";
import ReactDOM from "react-dom";

// Assets
import { TiTickOutline, TiDeleteOutline } from "react-icons/ti";

// Custom Hooks
import useBook from "../../../hooks/useBook";

const Toast = () => {
  const { toast, removeToast } = useBook();
  const toastEle = document.getElementById("toast");
  return (
    <div>
      {ReactDOM.createPortal(
        toast.map((ele) => (
          <div
            key={ele.id}
            className={`text-white w-1/4 absolute top-16 right-10  py-4 px-2 rounded-xl flex items-center justify-between z-[60] ${
              ele.type === "success" ? "bg-custom-3" : "bg-red-500"
            }`}
          >
            <div className="flex items-center">
              {<TiTickOutline className="text-black text-xl" />}
              <span className="ml-2 text-xl text-black font-bold capitalize">
                {ele.text}
              </span>
            </div>
            <span onClick={() => removeToast(ele.id)}>
              <TiDeleteOutline className="text-black text-xl cursor-pointer" />
            </span>
          </div>
        )),
        toastEle
      )}
    </div>
  );
};

export default Toast;
