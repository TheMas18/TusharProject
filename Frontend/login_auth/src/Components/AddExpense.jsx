import React, { useState } from "react";

const AddExpensePage = () => {
  const [category, setCategory] = useState("Food");
  const [inputValue, setInputValue] = useState("");
  const [expenses, setExpenses] = useState({
    Food: [],
    Travel: [],
    Shopping: [],
  });

  const handleAddExpense = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a valid expense!");
      return;
    }

    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [category]: [...prevExpenses[category], inputValue],
    }));

    setInputValue(""); // Clear the input after adding
    alert(`Expense added to ${category}`);
  };

  return (
    <div>
      <h2>Add Expense</h2>

      <div>
        <label>Select Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>
          {`Enter ${category} Expense:`}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
      </div>

      <button onClick={handleAddExpense} style={{ marginTop: "20px" }}>
        Add Expense
      </button>

    
    </div>
  );
};

export default AddExpensePage;
