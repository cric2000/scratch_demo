import React, { useState } from "react";

export default function MidArea({ sprites ,addCodeBlock}) {
  const [blocks, setBlocks] = useState([]);
  const handleDrop = (event) => {
    event.preventDefault();

    const blockType = event.dataTransfer.getData("blockType");
    const text = event.dataTransfer.getData("text");
    const offsetX = event.clientX;
    const offsetY = event.clientY;

    const newBlock = { type: blockType, text, offsetX, offsetY };
    setBlocks([...blocks, newBlock]);
  };

  const handleBlockClick = (index) => {
    const block = blocks[index];
    if (block.type === "motion") {
      moveSprite(block.text);
    } else if (block.type === "event") {
      handleEvent(block.text);
    } else if (block.type === "rotation") {
      rotateSprite(block.text);
    }else if (block.type.startsWith("looks")) {
      handleLooksAction(block.type, block.text);
    }
  };
  

  const handleLooksAction = (blockType, text) => {
    if (blockType === "looks_sayHello") {
      showMessage('Hello',);
    } else if (blockType === "looks_sayHello2Sec") {
      showMessage('Hello','2000');
     
    } else if (blockType === "looks_think2Sec") {
      showMessage('Hmmm','2000');
     
    }
  };

  const showMessage = (message,time) => {
    const newBlock = { type: "look", text: message, duration:time };
    addCodeBlock(newBlock);
  };

 

  const moveSprite = (action) => {
    const newBlock = { type: "motion", text: action, offsetX: 0, offsetY: 0 };
    addCodeBlock(newBlock);
  };

  const rotateSprite = (degrees) => {
    console.log(`Rotating sprite: ${degrees} degrees`);
    const newBlock = { type: "rotation", text: degrees, offsetX: 0, offsetY: 0 };
    addCodeBlock(newBlock);
  };

  const handleEvent = (action) => {
    console.log(`Handling event: ${action}`);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="flex-1 h-full w-full overflow-auto"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {blocks.map((block, index) => (
        <div
          key={index}
          style={{ position: "absolute", top: block.offsetY, left: block.offsetX, cursor: "pointer" }}
          className="flex flex-row flex-wrap bg-blue-700 text-white px-4 py-2 my-2 text-sm cursor-pointer rounded-xl"
          onClick={() => handleBlockClick(index)}
        >
          {block.text}
        </div>
      ))}
    </div>
  );
}
