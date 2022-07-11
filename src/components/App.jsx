import React from "react";
import Dictionary from "./Emoji";
import emojipedia from "../emojipedia";

function Emoji_Linker(prop) {
  return (
    <Dictionary
      key={prop.id}
      emoji={prop.emoji}
      name={prop.name}
      meaning={prop.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(Emoji_Linker)}
    </div>
  );
}

export default App;
