import { useState } from "react";

export default function ControlPanel({ onAddTodo }) {
  const [newItem, setNewItem] = useState("");
  return (
    <div>
      <div class="controls">
        <h3>Controls state</h3>
        <div class="state">
          <label>newItem:</label>
          {JSON.stringify(newItem)}
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
