import React, { useState } from 'react';

function CategoryInput({ category, onAddExpense }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    if (amount) {
      onAddExpense(amount);
      setAmount(''); // Clear input field
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <h4>{category} Expense</h4>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder={`Enter ${category} expense`}
      />
      <button onClick={handleSubmit} style={{ marginLeft: '5px' }}>
        Add
      </button>
    </div>
  );
}

export default CategoryInput;
