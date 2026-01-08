import { useState } from "react";

const EditEntry = ({ entry, onCancel, onSave }) => {
  const [amount, setAmount] = useState(entry.amount);
  const [category, setCategory] = useState(entry.category);

  const updateEntry = async () => {
    await fetch(
      `http://localhost:5000/api/entries/${entry.transactionId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, category }),
      }
    );

    onSave();
  };

  return (
    <tr>
      <td>{entry.transactionId}</td>
      <td>{new Date(entry.date).toLocaleDateString()}</td>
      <td>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </td>
      <td>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </td>
      <td>
        <button onClick={updateEntry}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditEntry;
