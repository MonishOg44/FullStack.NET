import React from "react";

function NewEvent() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
  <div class="p-6">
    <h2 class="text-xl font-semibold text-gray-800">hello</h2>
    <p class="mt-2 text-gray-600">
    </p>
    <button class="mt-4 px-4 py-2 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
    </button>
  </div>
</div>
      <h2>Number List</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewEvent;