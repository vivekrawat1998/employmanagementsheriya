import React, { useState } from "react";
import { getLocalStorage } from "../../utils/localstorage";

const CreateTask = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [date, setdate] = useState("");
  const [assign, setassign] = useState("");

  const [newtask, setnewtask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const tasks = {
      title,
      description,
      date,
      assign,
      active: false,
      completed: false,
      failed: false,
      newTask: true,
    };
    setnewtask(tasks);
    const handleSubmit = (e) => {
      e.preventDefault();

      const tasks = {
        title,
        description,
        date,
        assign,
        active: false,
        completed: false,
        failed: false,
        newTask: true,
      };
      setnewtask(tasks);

      // Log to confirm handleSubmit is triggered
      console.log("Form submitted");

      const data = getLocalStorage();
      console.log("Data:", data);

      if (data && data.employee.length > 0) {
        console.log("Employee Data:", data.employee);
      } else {
        console.log("Employee Data is empty or not available:", []);
      }
    };
    // settitle("");
    // setdescription("");
    // setdate("");
    // setassign("");
  };

return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap w-full items-start  justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4"
              type={title}
              onChange={(e) => settitle(e.target.value)}
              placeholder="enter the task"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => setdate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assign}
              onChange={(e) => setassign(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent text-gray-300 border-2 border-gray-400 mb-4"
              type="text"
              placeholder="Employe name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4"
              type="text"
              placeholder="design,dev etc,"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-2 border-gray-400 mb-4"
            name=""
            id=""
            cols="30"
            rows="10"
          />
          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-md text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
