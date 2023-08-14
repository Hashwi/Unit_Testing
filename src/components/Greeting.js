import React, { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const textChangeHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2> Hello World</h2>
      {!changedText && <Output>Nice to see you here!!</Output>}
      {changedText && <Output>See You soon!!</Output>}
      <button onClick={textChangeHandler}>Change Text</button>
    </div>
  );
}

export default Greeting;
