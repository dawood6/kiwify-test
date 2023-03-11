import React from "react";

const Input = ({ label, type, name, isError, helperText, field }) => {
  console.log(isError);
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={name} className="block text-sm font-medium leading-5 mb-1 text-gray-700" >{label}</label>
      <input
        type={type}
        name={name}
        {...field}
        className={`py-2 px-3 border ${
          isError ? "border-red-300" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
      />
      {isError && <p className="text-xs font-[300] text-red-500 mt-1">{helperText}</p>}
    </div>
  );
};

export default Input;
