import React from "react";
import NewTask from "../TaskList/NewTask";
import Failedtask from "../TaskList/Failedtask";
import CompleteTask from "../TaskList/CompleteTask";
import AcceptTAsk from "../TaskList/AcceptTAsk";

const Tasklist = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full flex items-center justify-start flex-nowrap gap-5 py-5  mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <Failedtask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.active) {
          return <AcceptTAsk key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default Tasklist;
