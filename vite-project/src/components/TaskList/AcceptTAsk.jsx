import React from "react";

const AcceptTAsk = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-yellow-600 px-3 py-1 rounded text-sm">{data.category}</h3>
        <h4 className="text-base">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">
        {data.description}
      </p>
      <div className="flex gap-2">
          <button className="bg-green-500 p-3 rounded">
            Mark as Completed
          </button>
          <button className="bg-red-500 p-3 rounded">Mark as failed</button>
      </div>
    </div>
  );
};

export default AcceptTAsk;
