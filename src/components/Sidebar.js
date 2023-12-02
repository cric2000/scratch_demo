import React from "react";
import Icon from "./Icon";

export default function Sidebar({ addCodeBlock }) {
  const handleDragStart = (event, blockType, text) => {
    event.dataTransfer.setData("blockType", blockType);
    event.dataTransfer.setData("text", text);
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
    <p className="text-lg font-medium">Motion</p>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => handleDragStart(e, "motion", "Move 10 steps")}
      >
       <Icon name="flag" size={15} className="text-orange-600 mx-2" />
        {"Move 10 steps"}
      </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable
        onDragStart={(e) => handleDragStart(e, "rotation", "Turn 15 degrees")}
      >
       <Icon name="redo" size={15} className="text-orange-600 mx-2" />
        {"Turn 15 degree"}
      </div>
      <div className="mt-4">
        <p className="text-lg font-medium">Looks</p>
        <button
        onDragStart={(e) => handleDragStart(e, "looks_sayHello", "Say Hello")}
          draggable
          className="btn bg-red-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        >
          Say Hello
        </button>
        <button
         onDragStart={(e) => handleDragStart(e, "looks_sayHello2Sec", "Say Hello for 2 seconds")}
          draggable
          className="btn bg-red-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        >
          Say Hello for 2 seconds
        </button>
      </div>
    </div>
  );
}
