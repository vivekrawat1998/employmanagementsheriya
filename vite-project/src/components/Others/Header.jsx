import React from "react";
import { setLocalStorage } from "../../utils/localstorage";

const Header = ({ changeUser }) => {
  const handlelogout = () => {
    localStorage.setItem("loggedinuser", "");
    changeUser("");
  };
  return (
    <div className="flex justify-between  items-end">
      <h1 className="text-2xl">
        Hello <br />
        <span className="text-3xl font-semibold"> firstName </span>
      </h1>
      <button
        onClick={handlelogout}
        className="px-5 py-2 bg-red-500  rounded-md text-white text-lg font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
