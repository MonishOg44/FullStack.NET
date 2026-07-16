import React from "react";
function NewCounter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
       <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default NewCounter;