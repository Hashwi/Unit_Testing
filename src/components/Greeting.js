import React, { useState } from "react";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const textChangeHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2> Hello World</h2>
      {!changedText && <p>Nice to see you here!!</p>}
      {changedText && <p>See You soon!!</p>}
      <button onClick={textChangeHandler}>Change Text</button>
    </div>
  );
}

export default Greeting;
