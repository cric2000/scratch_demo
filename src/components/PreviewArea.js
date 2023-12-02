import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ codeBlocks }) {
  const handleSpriteAction = (action) => {

    console.log(`Performing sprite action: ${action}`);
    moveSprite(action);
    if (action.startsWith("looks")) {
      showMessageOnSprite(action);
    }
  };

  const showMessageOnSprite = (action) => {
    console.log(`Displaying message on sprite: ${action}`);
  };

  return (
    <div className="flex-none w-full h-full overflow-y-auto p-2">
      <CatSprite codeBlocks={codeBlocks} handleSpriteAction={handleSpriteAction} />
      <div className="mt-4">
        <strong style={{color:'blue'}}>CatSprite Actions</strong>
        {codeBlocks.map((block, index) => (
          <div key={index} onClick={() => handleSpriteAction(block.text)} style={{ cursor: "pointer" }}>
            {block.text}
          </div>
        ))}
      </div>
    </div>
  );
}
