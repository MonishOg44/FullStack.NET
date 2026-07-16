
import React from "react";

function Card({ children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      {children} {}
    </div>
  );
}

function App() {
  return (
    <div>
      <Card>
        <h2>Hello World</h2>
        <p>This content is passed as children.</p>
      </Card>

      <Card>
        <button>Click Me</button>
      </Card>
    </div>
  );
}

export default App;