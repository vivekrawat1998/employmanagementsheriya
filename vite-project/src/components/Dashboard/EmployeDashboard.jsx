import React from "react";
import Header from "../Others/Header";
import Tasklistnumber from "../Others/Tasklistnumber";
import Tasklist from "../Others/Tasklist";

const EmployeDashboard = ({ changeUser, data }) => {
  // console.log(data)
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen ">
      <Header changeUser={changeUser} data={data} />
      <Tasklistnumber data={data} />
      <Tasklist data={data} />
    </div>
  );
};

export default EmployeDashboard;
