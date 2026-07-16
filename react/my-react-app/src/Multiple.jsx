import React, { use, useState } from "react";

function Multiple() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isStudent, setIsStudent] = useState(false);
  
  return (
    <div>
      <h2>Multiple States Example</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <button onClick={() => setIsStudent(!isStudent)}>
        Toggle Student Status
      </button>
    </div>
  );
}

export default Multiple;
//get is used for querry string to pass value from web page
//