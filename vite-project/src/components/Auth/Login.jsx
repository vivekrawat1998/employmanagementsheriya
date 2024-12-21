import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = ({ handlelogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showpass, setshowpass] = useState(false);

  const Submithandler = (e) => {
    e.preventDefault();
    handlelogin(email, password);
    setemail("");
    setpassword("");
  };

  const handleonclick = () => {
    setshowpass(!showpass);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20 ">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => Submithandler(e)}
        >
          <input
            className="border-2 border-emerald-600 p-3 text-xl text-white outline-none bg-transparent placeholder:text-gray-400 rounded-full "
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email"
          />
          <div className="relative">
            <input
              type={showpass ? "text" : "password"}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your Password"
              className="border-2 mt-4 p-3 border-emerald-600 text-xl text-white outline-none bg-transparent placeholder:text-gray-400 rounded-full "
            />
            <div
              onClick={handleonclick}
              className="absolute right-5 top-10 cursor-pointer"
            >
              {showpass ? <FiEye /> : <FiEyeOff />}
            </div>
          </div>
          <button className="border-none mt-4 p-2 px-24 py-2 bg-emerald-600 text-xl text-white outline-none   placeholder:text-gray-400 rounded-full ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
