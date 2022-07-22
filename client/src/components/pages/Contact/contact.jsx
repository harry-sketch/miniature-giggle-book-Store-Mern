import React, { useState } from "react";
import BasicInput from "../../common/BasicInput/BasicInput";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };
  return (
    <div className="pt-14 px-6 pb-6  w-full min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl text-center font-bold text-custom-3 underline mb-3">
        Contact Us
      </h1>
      <BasicInput
        placeholder="Enter Name"
        type="text"
        name="name"
        value={contact.name}
        onChange={(e) => handleChange(e)}
      />
      <BasicInput
        placeholder="Enter Email"
        type="text"
        name="email"
        value={contact.email}
        onChange={(e) => handleChange(e)}
      />
      <BasicInput
        placeholder="Enter Phone"
        type="number"
        name="phone"
        value={contact.phone}
        onChange={(e) => handleChange(e)}
      />
      <textarea
        name="desc"
        placeholder="Enter Description"
        rows="5"
        className="bg-custom-2 w-1/2 mb-4 resize-none focus:outline-custom-3 p-5 text-white"
        value={contact.desc}
        onChange={(e) => handleChange(e)}
      />
      <button
        type="button"
        className="w-1/2 bg-gradient-to-r from-[#01C29A] to-[#E9CD70] py-5 font-extrabold text-lg cursor-pointer"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
