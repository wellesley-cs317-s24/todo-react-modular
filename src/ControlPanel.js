import { useState } from "react";

export default function ContolPanel({ onAddTodo }) {
  const [newItem, setNewItem] = useState("");
  return (
    <div>
      <div class="controls">
        <div class="state">
          <h2>Controls state</h2>
          {JSON.stringify({ newItem: newItem })}
        </div>
        <input
          placeholder="Add todo"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          onClick={() => {
            setNewItem("");
            onAddTodo(newItem);
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}
