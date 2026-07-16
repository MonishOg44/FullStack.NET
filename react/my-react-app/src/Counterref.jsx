import React, { useRef, useState } from "react";

function Counterref() {
  // useRef: persists value but does NOT trigger re-render
  const refCount = useRef(0);

  // useState: persists value AND triggers re-render
  const [stateCount, setStateCount] = useState(0);

  // Increment ref count (no re-render)
  const handleRefCounter = () => {
    refCount.current++;
    console.log("Ref count:", refCount.current);
    // UI will NOT update automatically
  };

  // Increment state count (triggers re-render)
  const handleStateCounter = () => {
    setStateCount(prev => prev + 1);
    // UI will update because reconciliation runs
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>React Diffing & Reconciliation Demo</h2>

      {/* Ref counter */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Using useRef</h3>
        <p>Ref Count (won’t update on screen): {refCount.current}</p>
        <button onClick={handleRefCounter}>Increment Ref</button>
      </div>

      {/* State counter */}
      <div>
        <h3>Using useState</h3>
        <p>State Count (updates on screen): {stateCount}</p>
        <button onClick={handleStateCounter}>Increment State</button>
      </div>
    </div>
  );
}

export default Counterref;