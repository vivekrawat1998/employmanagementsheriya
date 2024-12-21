import React, { useContext } from "react";
import { Authcontext } from "../../context/AuthProvider";

const Alltask = () => {
  const authdata = useContext(Authcontext);
  // console.log(authdata);
  return (
    <div className="bg-[#1c1c1c] h-full mt-5 rounded p-5 ">
      <div className="bg-red-500 border-emerald-500 mb-2 py-2 flex justify-between rounded px-4">
        <h2 className="text-white text-xl w-1/5">Employee name</h2>
        <h3 className="w-1/5 text-xl"> New Task</h3>
        <h3 className="w-1/5 text-xl ">active task</h3>
        <h3 className="w-1/5 text-xl ">Completed Task</h3>
        <h3 className="w-1/5 text-xl">Failed Task</h3>
      </div>
      <div className="">
        {authdata.employee.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="bg-transparent border-emerald-500 border-2  mb-2 py-2 flex justify-between rounded px-4"
            >
              <h2 className="text-white text-xl w-1/5">{elem.firstName}</h2>
              <h3 className="w-1/5 text-xl text-yellow-400">
                {elem.taskNumbers.newTask}
              </h3>
              <h3 className="w-1/5 text-xl text-blue-400">
                {elem.taskNumbers.active}
              </h3>
              <h3 className="w-1/5 text-xl text-green-400">
                {elem.taskNumbers.completed}
              </h3>
              <h3 className="w-1/5 text-xl text-red-400">
                {elem.taskNumbers.failed}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alltask;
