import React, { useEffect, useRef } from "react";

const BasicInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={`bg-custom-2 text- my-4 text-white ${className}`}>
      <input
        ref={inputRef}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        className="bg-transparent w-full  focus:outline-custom-3 p-5"
      />
    </div>
  );
};

export default React.memo(BasicInput);
