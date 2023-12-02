import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [codeBlocks, setCodeBlocks] = useState([]);
  const [sprites, setSprites] = useState([]);

  const addCodeBlock = (block) => {
    setCodeBlocks([...codeBlocks, block]);
  };

  const addSprite = (sprite) => {
    setSprites([...sprites, sprite]);
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar addCodeBlock={addCodeBlock} addSprite={addSprite} />
          <MidArea codeBlocks={codeBlocks} sprites={sprites} addCodeBlock={addCodeBlock} />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea sprites={sprites} codeBlocks={codeBlocks} />
        </div>
      </div>
    </div>
  );
}
